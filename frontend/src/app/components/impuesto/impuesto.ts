  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';

  type TramoIR = {
    fraccionBasica: number;
    excesoHasta: number;
    impuestoFraccion: number;
    porcentaje: number;
  };

  @Component({
  selector: 'app-impuesto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './impuesto.html',
  styleUrls: ['./impuesto.css']
})

export class Impuesto {
    cedula: string = '';
    sueldoAnual: number = 0;

    alimentacion: number = 0;
    vivienda: number = 0;
    educacion: number = 0;
    vestimenta: number = 0;
    salud: number = 0;

    LIMITE_CATEGORIA: number = 3809.65;
    LIMITE_TOTAL: number = 15238.60;

    tabla: TramoIR[] = [
      { fraccionBasica: 0,      excesoHasta: 11722,   impuestoFraccion: 0,     porcentaje: 0.00 },
      { fraccionBasica: 11722,  excesoHasta: 14930,   impuestoFraccion: 0,     porcentaje: 0.05 },
      { fraccionBasica: 14930,  excesoHasta: 19385,   impuestoFraccion: 160,   porcentaje: 0.10 },
      { fraccionBasica: 19385,  excesoHasta: 25638,   impuestoFraccion: 606,   porcentaje: 0.12 },
      { fraccionBasica: 25638,  excesoHasta: 33738,   impuestoFraccion: 1356,  porcentaje: 0.15 },
      { fraccionBasica: 33738,  excesoHasta: 44721,   impuestoFraccion: 2571,  porcentaje: 0.20 },
      { fraccionBasica: 44721,  excesoHasta: 59537,   impuestoFraccion: 4768,  porcentaje: 0.25 },
      { fraccionBasica: 59537,  excesoHasta: 79388,   impuestoFraccion: 8472,  porcentaje: 0.30 },
      { fraccionBasica: 79388,  excesoHasta: 105580,  impuestoFraccion: 14427, porcentaje: 0.35 },
      { fraccionBasica: 105580, excesoHasta: Infinity, impuestoFraccion: 23594, porcentaje: 0.37 },
    ];

    gastosPermitidos: number = 0;
    baseImponible: number = 0;
    excedente: number = 0;
    porcentajeExcedente: number = 0;
    impuestoFraccionBasica: number = 0;
    impuestoRenta: number = 0;

    jsonSalida: string = '';

    private clamp(n: number): number {
      if (!isFinite(n) || n < 0) return 0;
      return n;
    }

    private redondear2(n: number): number {
      return Math.round((n + Number.EPSILON) * 100) / 100;
    }

    obtenerGastosPermitidos(): number {
      const a = Math.min(this.clamp(this.alimentacion), this.LIMITE_CATEGORIA);
      const v = Math.min(this.clamp(this.vivienda), this.LIMITE_CATEGORIA);
      const e = Math.min(this.clamp(this.educacion), this.LIMITE_CATEGORIA);
      const ve = Math.min(this.clamp(this.vestimenta), this.LIMITE_CATEGORIA);
      const s = this.clamp(this.salud);

      const suma = a + v + e + ve + s;
      return this.redondear2(Math.min(suma, this.LIMITE_TOTAL));
    }

    obtenerBaseImponible(ingresos: number, gastos: number): number {
      return this.redondear2(Math.max(this.clamp(ingresos) - this.clamp(gastos), 0));
    }

    buscarTramo(base: number): TramoIR {
      for (const t of this.tabla) {
        if (base <= t.excesoHasta) return t;
      }
      return this.tabla[this.tabla.length - 1];
    }

    calcularExcedente(base: number, fraccionBasica: number): number {
      return this.redondear2(Math.max(base - fraccionBasica, 0));
    }

    calcularImpuestoRenta(): void {
      this.gastosPermitidos = this.obtenerGastosPermitidos();
      this.baseImponible = this.obtenerBaseImponible(this.sueldoAnual, this.gastosPermitidos);

      const tramo = this.buscarTramo(this.baseImponible);

      this.excedente = this.calcularExcedente(this.baseImponible, tramo.fraccionBasica);

      this.porcentajeExcedente = tramo.porcentaje;
      this.impuestoFraccionBasica = tramo.impuestoFraccion;

      const impuestoExcedente = this.redondear2(this.excedente * this.porcentajeExcedente);
      this.impuestoRenta = this.redondear2(this.impuestoFraccionBasica + impuestoExcedente);

      const data = {
        cedula: this.cedula,
        sueldoAnual: this.redondear2(this.clamp(this.sueldoAnual)),
        deducciones: {
          alimentacion: this.redondear2(this.clamp(this.alimentacion)),
          vivienda: this.redondear2(this.clamp(this.vivienda)),
          educacion: this.redondear2(this.clamp(this.educacion)),
          vestimenta: this.redondear2(this.clamp(this.vestimenta)),
          salud: this.redondear2(this.clamp(this.salud)),
        },
        limites: {
          limiteCategoria: this.LIMITE_CATEGORIA,
          limiteTotal: this.LIMITE_TOTAL,
        },
        calculo: {
          gastosPermitidos: this.gastosPermitidos,
          baseImponible: this.baseImponible,
          tramo: {
            fraccionBasica: tramo.fraccionBasica,
            excesoHasta: tramo.excesoHasta,
            impuestoFraccion: tramo.impuestoFraccion,
            porcentajeExcedente: tramo.porcentaje,
          },
          excedente: this.excedente,
          impuestoRenta: this.impuestoRenta,
        },
      };

      this.jsonSalida = JSON.stringify(data, null, 2);
    }

    limpiar(): void {
      this.cedula = '';
      this.sueldoAnual = 0;
      this.alimentacion = 0;
      this.vivienda = 0;
      this.educacion = 0;
      this.vestimenta = 0;
      this.salud = 0;

      this.gastosPermitidos = 0;
      this.baseImponible = 0;
      this.excedente = 0;
      this.porcentajeExcedente = 0;
      this.impuestoFraccionBasica = 0;
      this.impuestoRenta = 0;
      this.jsonSalida = '';
    }
  }
