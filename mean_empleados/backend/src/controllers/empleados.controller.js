const Empleado = require('../models/Empleado'); 
const empleadoCtrl = {}; 

// Obtener todos los empleados
empleadoCtrl.getEmpleados = async (req, res) => { 
    const empleados = await Empleado.find();
    res.json(empleados); 
};

// Crear un nuevo empleado
empleadoCtrl.createEmpleado = async (req, res) => { 
    const empleado = new Empleado({ 
        nombre: req.body.nombre, 
        cargo: req.body.cargo, 
        departamento: req.body.departamento, 
        sueldo: req.body.sueldo 
    });
    await empleado.save(); 
    res.json({ status: 'Empleado guardado' }); 
};

// Obtener un solo empleado por ID
empleadoCtrl.getEmpleado = async (req, res) => { 
    const empleado = await Empleado.findById(req.params.id);
    res.json(empleado);
};

// Editar un empleado
empleadoCtrl.editEmpleado = async (req, res) => { 
    const { id } = req.params; 
    const empleado = { 
        nombre: req.body.nombre, 
        cargo: req.body.cargo, 
        departamento: req.body.departamento, 
        sueldo: req.body.sueldo 
    };
    await Empleado.findByIdAndUpdate(id, { $set: empleado }, { new: true });
    res.json({ status: 'Empleado actualizado' }); 
};

// Eliminar un empleado
empleadoCtrl.deleteEmpleado = async (req, res) => { 
    await Empleado.findByIdAndRemove(req.params.id); 
    res.json({ status: 'Empleado eliminado' }); 
};

module.exports = empleadoCtrl; 