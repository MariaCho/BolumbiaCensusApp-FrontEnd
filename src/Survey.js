import React, { Component } from 'react';
import Select from 'react-select';
import './Survey.css';

const generos = [
    { value: 'masculino', label: 'Masculino' },
    { value: 'femenino', label: 'Femenino' },
    { value: 'mujerTransgenero', label: 'Mujer Transgenero' },
    { value: 'hombreTransgenero', label: 'Hombre Transgenero' }
  ];
const dias = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' },
    { value: '16', label: '16' },
    { value: '17', label: '17' },
    { value: '18', label: '18' },
    { value: '19', label: '19' },
    { value: '20', label: '20' },
    { value: '21', label: '21' },
    { value: '22', label: '22' },
    { value: '23', label: '23' },
    { value: '24', label: '24' },
    { value: '25', label: '25' },
    { value: '26', label: '26' },
    { value: '27', label: '27' },
    { value: '28', label: '28' },
    { value: '29', label: '29' },
    { value: '30', label: '30' },
    { value: '31', label: '31' }
];
const meses = [
    { value: '01', label: 'Enero' },
    { value: '02', label: 'Febrero' },
    { value: '03', label: 'Marzo' },
    { value: '04', label: 'Abril' },
    { value: '05', label: 'Mayo' },
    { value: '06', label: 'Junio' },
    { value: '07', label: 'Julio' },
    { value: '08', label: 'Agosto' },
    { value: '09', label: 'Septiembre' },
    { value: '10', label: 'Octubre' },
    { value: '11', label: 'Noviembre' },
    { value: '12', label: 'Diciembre' }
  ];

  const direcciones = [
    { value: 'anillo', label: 'Anillo' },
    { value: 'autopista', label: 'Autopista' },
    { value: 'avenida', label: 'Avenida' },
    { value: 'avenidaCalle', label: 'Avenida Calle' },
    { value: 'avenidaCarrera', label: 'Avenida Carrera' },
    { value: 'calle', label: 'Calle' },
    { value: 'carrera', label: 'Carrera' },
    { value: 'circular', label: 'Circular' },
    { value: 'diagonal', label: 'Diagonal' },
    { value: 'transversal', label: 'Transversal' }
  ];

  const ciudades = [
    { value: 'zona01', label: 'Barbarosa' },
    { value: 'zona02', label: 'Girardotota' },
    { value: 'zona03', label: 'Cpacabaniando' },
    { value: 'zona04', label: 'Bellisimo' },
    { value: 'zona05', label: 'Medelin' },
    { value: 'zona06', label: 'Envihermoso' },
    { value: 'zona07', label: 'Itagi' },
    { value: 'zona08', label: 'Sabana' },
    { value: 'zona09', label: 'Caldero' },
    { value: 'zona10', label: 'La Luna' }
  ];

  const paises = [
    { value: 'tibercuador', label: 'Tibercuador' },
    { value: 'bolumbia', label: 'Bolumbia' },
    { value: 'valenzuela', label: 'Valenzuela' },
    { value: 'brezil', label: 'Brezil' },
    { value: 'paru', label: 'Paru' },
    { value: 'chale', label: 'Chale' },
    { value: 'anglertina', label: 'Anglertina' }
  ];

  const etnias = [
    { value: 'blancos', label: 'Blancos' },
    { value: 'indigenas', label: 'Indigenas' },
    { value: 'afrodecendientes', label: 'Afrodecendientes' },
    { value: 'raizales', label: 'Raizales' },
    { value: 'rom', label: 'Rom' }
  ];

  const religiones = [
    { value: 'catolica', label: 'Catolica' },
    { value: 'cristiana', label: 'Cristinana' },
    { value: 'judia', label: 'Judia' },
    { value: 'musulmana', label: 'Musulmana' },
    { value: 'protestante', label: 'Protestante' },
    { value: 'ateo', label: 'Ateo' },
    { value: 'noPractica', label: 'No Practica' }
  ];

  const estadosCiviles = [
    { value: 'soltero', label: 'Soltero' },
    { value: 'casado', label: 'Casado' },
    { value: 'divorciado', label: 'Separado o Divorciado' },
    { value: 'viudo', label: 'Viudo' },
    { value: 'unionLibre', label: 'Union Libre' }
  ];

  const nivelesAcademicos = [
    { value: 'primaria', label: 'Pimaria' },
    { value: 'bachillerato', label: 'Bachillerato' },
    { value: 'universitario', label: 'Universitario' },
    { value: 'tecnico', label: 'Tecnica o Tecnologia' },
    { value: 'noTiene', label: 'No tiene ningun nivel academico' }
  ];

  const situacionesEOT = [
    { value: 'estudia', label: 'Estudia' },
    { value: 'trabaja', label: 'Trabaja' },
    { value: 'ambas', label: 'Ambas' },
    { value: 'ninguna', label: 'Ninguna' }
  ];

  const ingresosMensuales = [
    { value: '0', label: '0 $' },
    { value: '0y1', label: 'Entre 0 $ y 1000000 $' },
    { value: '1y2', label: 'Entre 1000000 $ y 2000000 $' },
    { value: '2y3', label: 'Entre 2000000 $ y 3000000 $' },
    { value: '3y4', label: 'Entre 3000000 $ y 4000000 $' },
    { value: '4y5', label: 'Entre 4000000 $ y 5000000 $' },
    { value: '6omas', label: '6000000 $ o mas' }
  ];

  const situacionesLaborales = [
    { value: 'empleado', label: 'Empleado' },
    { value: 'independiente', label: 'Trabaja en su propio negocio' },
    { value: 'sinpaga', label: 'Trabaja sin paga directamente' }
  ];

  const horasLaborales = [
    { value: '0', label: '0 horas a la semana' },
    { value: '0y10', label: 'Entre 0 y 10 horas a la semana' },
    { value: '10y20', label: 'Entre 10 y 20 horas a la semana' },
    { value: '20y30', label: 'Entre 20 y 30 horas a la semana' },
    { value: '30y40', label: 'Entre 30 y 40 horas a la semana' },
    { value: '40y50', label: 'Entre 40 y 50 horas a la semana' },
    { value: '60omas', label: '60 horas a la semana  o mas' }
  ];

class Survey extends Component {
    constructor(props){
        super(props)
        this.state = {
            fullname: '',
            firstLastName: '',
            secondLastName: '',
            añoNacimiento:'',
            viaPrincipal:'',
            nomenclatura:'',
            viaSecundaria: '',
            añosVividos:'',
            hijosVivos:'',
            hijosTotales:'',
            personasVivienda:'',
            nombreEmpresa: '',
            numeroCelular: '',
            numeroEdad:'',
            hasAgreed: false,
            problemasAprendizaje: false,
            problemasCaminar: false,
            problemasComunicacion: false,
            problemasEscucha: false,
            problemasManejarObjetos: false,
            problemasVision: false,
            noProblemas: false,
            genero: null,
            dia: null,
            mes: null,
            direccion: null,
            ciudad: null,
            pais: null,
            etnia: null,
            religion: null,
            estadoCivil: null,
            nivelAcademico: null,
            situacionEOT: null,
            ingresosMensual: null,
            situacionLaboral: null,
            horasLaboral: null
        }
      }
      handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log("dato final", data)

      }

      toggleCheckboxChange = () => {
    
        this.setState(({ hasAgreed }) => (
          {
            hasAgreed: !hasAgreed,
          }
        ));
    
      }
      toggleCheckboxChangeVisual = () => {
    
        this.setState(({ problemasVision }) => (
          {
            problemasVision: !problemasVision,
          }
        ));
    
      }
      toggleCheckboxChangeEscucha = () => {
    
        this.setState(({ problemasEscucha }) => (
          {
            problemasEscucha: !problemasEscucha,
          }
        ));
    
      }
      toggleCheckboxChangeCaminar = () => {
    
        this.setState(({ problemasCaminar }) => (
          {
            problemasCaminar: !problemasCaminar,
          }
        ));
    
      }
      toggleCheckboxChangeManejarObjetos = () => {
    
        this.setState(({ problemasManejarObjetos }) => (
          {
            problemasManejarObjetos: !problemasManejarObjetos,
          }
        ));
    
      }
      toggleCheckboxChangeAprender = () => {
    
        this.setState(({ problemasAprendizaje }) => (
          {
            problemasAprendizaje: !problemasAprendizaje,
          }
        ));
    
      }
      toggleCheckboxChangeComunicacion = () => {
    
        this.setState(({ problemasComunicacion }) => (
          {
            problemasComunicacion: !problemasComunicacion,
          }
        ));
    
      }
      toggleCheckboxChangeSinProblemas = () => {
    
        this.setState(({ noProblemas }) => (
          {
            noProblemas: !noProblemas,
          }
        ));
    
      }
    
      handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
      }
      
      handleChange = (genero) => {
        this.setState({ genero });
        console.log(`genero:`, genero);
      }

      handleChangeDia = (dia) => {
        this.setState({ dia });
        console.log(`dia:`, dia);
      }
      
      handleChangeMes = (mes) => {
        this.setState({ mes });
        console.log(`mes:`, mes);
      }

      handleChangeCiudad = (ciudad) => {
        this.setState({ ciudad });
        console.log(`ingresos mensuales:`, ciudad);
      }

      handleChangeDireccion = (direccion) => {
        this.setState({ direccion });
        console.log(`direccion:`, direccion);
      }

      handleChangePais = (pais) => {
        this.setState({ pais });
        console.log(`pais:`, pais);
      }

      handleChangeEtnia = (etnia) => {
        this.setState({ etnia });
        console.log(`etnia:`, etnia);
      }

      handleChangeReligion = (religion) => {
        this.setState({ religion });
        console.log(`religion:`, religion);
      }

      handleChangeEstadoCivil = (estadoCivil) => {
        this.setState({ estadoCivil });
        console.log(`estado civil:`, estadoCivil);
      }

      handleChangeNivelAcademico = (nivelAcademico) => {
        this.setState({ nivelAcademico });
        console.log(`nivel academico:`, nivelAcademico);
      }

      handleChangeSituacionEOT = (situacionEOT) => {
        this.setState({ situacionEOT });
        console.log(`sitaucion EOT:`, situacionEOT);
      }

      handleChangeIngresosMensual = (ingresosMensual) => {
        this.setState({ ingresosMensual });
        console.log(`ingresos mensuales:`, ingresosMensual);
      }

      handleChangeSituacionLaboral = (situacionLaboral) => {
        this.setState({ situacionLaboral });
        console.log(`ingresos mensuales:`, situacionLaboral);
      }

      handleChangeHorasLaboral = (horasLaboral) => {
        this.setState({ horasLaboral });
        console.log(`ingresos mensuales:`, horasLaboral);
      }
      
    render(){
        const { genero } = this.state;
        const { dia } = this.state;
        const { mes } = this.state;
        const { direccion } = this.state;
        const { ciudad } = this.state;
        const { label } = this.props;
        const { hasAgreed } = this.state;
        const { pais } = this.state;
        const { etnia } = this.state;
        const { problemasAprendizaje } = this.state;
        const { problemasCaminar } = this.state;
        const { problemasComunicacion } = this.state;
        const { problemasEscucha } = this.state;
        const { problemasManejarObjetos } = this.state;
        const { problemasVision } = this.state;
        const { noProblemas } = this.state;
        const { religion } = this.state;
        const { estadoCivil } = this.state;
        const { nivelAcademico } = this.state;
        const { situacionEOT } = this.state;
        const { ingresosMensual } = this.state;
        const { situacionLaboral } = this.state;
        const { horasLaboral } = this.state;
        
        return(
            <div className="Survey">
                <div className="Survey__Aside"> </div>
                <div className="Survey__Form">
                    <div className="Survey__FormTitle">Encuesta censo de Bolumbia, permitase responder las siguientes preguntas a conciencia</div>
                    <div></div>
                    <div className="Survey__FormCenter">
                        <form className="Survey__FormFields" onSubmit={this.handleSubmit}>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label" htmlFor="name"> 1. Ingrese su nombre completo </label>
                                <input type="text" id="nombreCompleto" className="Survey__FormField__Input" placeholder="Nombre completo" name="fullname" value={this.state.fullname} onChange={this.handleInputChange}/>
                            </div>
                            <div className="Survey__FormField">
                                <input type="text" id="firstLastName" className="Survey__FormField__Input" placeholder="Primer apellido" name="firstLastName" value={this.state.firstLastName} onChange={this.handleInputChange}/>
                            </div>
                            <div className="Survey__FormField">
                                <input type="text" id="secondLastName" className="Survey__FormField__Input" placeholder="Segundo apellido" name="secondLastName" value={this.state.secondLastName} onChange={this.handleInputChange}/>  
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label" htmlFor="name"> 2. Indique el genero con el que se identifique </label>
                                <Select className="Survey__FormField__Dropdown"
                                    styles={{menuList: (base) => ({ ...base, color: 'black' })}}
                                    value={genero}
                                    onChange={this.handleChange}
                                    options={generos}
                                />
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label"> 3. Indique su edad (en años cumplidos) </label>
                                <input type="text" id="numeroEdad" className="Survey__FormField__Input" placeholder="Indique su edad" name="numeroEdad" value={this.state.numeroEdad} onChange={this.handleInputChange}/>
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label" htmlFor="name"> 4. Indique su pais de nacimiento </label>
                                <Select className="Survey__FormField__Dropdown"
                                    styles={{menuList: (base) => ({ ...base, color: 'black' })}}
                                    value={pais}
                                    onChange={this.handleChangePais}
                                    options={paises}
                                />
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label" htmlFor="name"> 5. Indique su fecha de nacimiento </label>
                                <label className="Survey__FormField__Label1" htmlFor="name"> Dia </label>
                                <Select className="Survey__FormField__Dropdown"
                                    styles={{menuList: (base) => ({ ...base, color: 'black' })}}
                                    value={dia}
                                    onChange={this.handleChangeDia}
                                    options={dias}
                                />
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label1" htmlFor="name"> Mes </label>
                                 <Select className="Survey__FormField__Dropdown"
                                    styles={{menuList: (base) => ({ ...base, color: 'black' })}}
                                    value={mes}
                                    onChange={this.handleChangeMes}
                                    options={meses}
                                />
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label1" htmlFor="name"> Año  (Indiquelo con 4 digitos) </label>
                                <input type="text" id="añoNacimiento" className="Survey__FormField__Input" placeholder="Año Nacimiento" name="añoNacimiento" value={this.state.añoNacimiento} onChange={this.handleInputChange}/>
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label" htmlFor="name"> 6. Indique su estado civil </label>
                                    <Select className="Survey__FormField__Dropdown"
                                        styles={{menuList: (base) => ({ ...base, color: 'black' })}}
                                        value={estadoCivil}
                                        onChange={this.handleChangeEstadoCivil}
                                        options={estadosCiviles}
                                    />
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label" htmlFor="name"> 7. Si se identifica con el genero Femenino, enuncie cuantos embarazos ha tenido </label>
                                <input type="text" id="hijosVivos" className="Survey__FormField__Input" placeholder="Numero de hijos vivos" name="hijosVivos" value={this.state.hijosVivos} onChange={this.handleInputChange}/>
                                <div className="Survey__FormField"></div>
                                <input type="text" id="hijosTotales" className="Survey__FormField__Input" placeholder="Numero total de hijos" name="hijosTotales" value={this.state.hijosTotales} onChange={this.handleInputChange}/>
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label" htmlFor="name"> 8. Indique su direccion actual de vivienda</label>
                                <label className="Survey__FormField__Label1" htmlFor="name"> Ciudad </label>
                                <Select className="Survey__FormField__Dropdown"
                                    styles={{menuList: (base) => ({ ...base, color: 'black' })}}
                                    value={ciudad}
                                    onChange={this.handleChangeCiudad}
                                    options={ciudades}
                                />
                                
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label1" htmlFor="name"> Direccion </label>
                                <Select className="Survey__FormField__Dropdown"
                                    styles={{menuList: (base) => ({ ...base, color: 'black' })}}
                                    value={direccion}
                                    onChange={this.handleChangeDireccion}
                                    options={direcciones}
                                />
                            </div>
                            <div className="Survey__FormField">
                                <input type="text" id="viaPrincipal" className="Survey__FormField__Input1" placeholder="Via Principal" name="viaPrincipal" value={this.state.viaPrincipal} onChange={this.handleInputChange}/>
                                <label className="Survey__FormField__Label2"> # </label>
                                <input type="text" id="nomenclatura" className="Survey__FormField__Input1" placeholder="Nomenclatura" name="nomenclatura" value={this.state.nomenclatura} onChange={this.handleInputChange}/>
                                <label className="Survey__FormField__Label2"> - </label>
                                <input type="text" id="viaSecundaria" className="Survey__FormField__Input1" placeholder="Via Secundaria" name="viaSecundaria" value={this.state.viaSecundaria} onChange={this.handleInputChange}/>
                            </div>

                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label"> 9. Indique su numero de celular (recuerde que son 10 digitos)</label>
                                <input type="text" id="numeroCelular" className="Survey__FormField__Input" placeholder="Numero de celular" name="numeroCelular" value={this.state.numeroCelular} onChange={this.handleInputChange}/>
                            </div>

                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label" htmlFor="name"> 10. ¿Cuanto tiempo (en años) ha vivido en la direccion dada anteriormente? </label>
                                <div className="Survey__FormField"></div>
                                <label className="Survey__FormField__Label1"> Marque aqui si ha sido menos de un año </label>
                                <input
                                    className="Survey__FormField__Checkbox"
                                    type="checkbox"
                                    value={label}
                                    checked={hasAgreed}
                                    onChange={this.toggleCheckboxChange}
                                />
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label1"> Sino enuncie la cantidad de años </label>
                                <input type="text" id="añosVividos" className="Survey__FormField__Input" placeholder="Años vividos" name="añosVividos" value={this.state.añosVividos} onChange={this.handleInputChange}/>
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label"> 11. ¿Cuantas personas viven en el inmueble anteriormente mencionado? </label>
                                <input type="text" id="personasVivienda" className="Survey__FormField__Input" placeholder="Numero de personas" name="personasVivienda" value={this.state.personasVivienda} onChange={this.handleInputChange}/>
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label" htmlFor="name"> 12. Indique su grupo etnico </label>
                                    <Select className="Survey__FormField__Dropdown"
                                        styles={{menuList: (base) => ({ ...base, color: 'black' })}}
                                        value={etnia}
                                        onChange={this.handleChangeEtnia}
                                        options={etnias}
                                    />
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label" htmlFor="name"> 13. Indique si tiene algun problema de salud o condicion que le cause algun inpedimento </label>
                                <div className="Survey__FormField"></div>
                                <label className="Survey__FormField__Label1"> Marque aqui si es un problema de vision </label>
                                <input
                                    className="Survey__FormField__Checkbox"
                                    type="checkbox"
                                    value={label}
                                    checked={problemasVision}
                                    onChange={this.toggleCheckboxChange}
                                />
                                <div className="Survey__FormField"></div>
                                <label className="Survey__FormField__Label1"> Marque aqui si es un problema de escucha </label>
                                <input
                                    className="Survey__FormField__Checkbox"
                                    type="checkbox"
                                    value={label}
                                    checked={problemasEscucha}
                                    onChange={this.toggleCheckboxChange}
                                />
                                <div className="Survey__FormField"></div>
                                <label className="Survey__FormField__Label1"> Marque aqui si es un problema de movilidad </label>
                                <input
                                    className="Survey__FormField__Checkbox"
                                    type="checkbox"
                                    value={label}
                                    checked={problemasCaminar}
                                    onChange={this.toggleCheckboxChange}
                                />
                                <div className="Survey__FormField"></div>
                                <label className="Survey__FormField__Label1"> Marque aqui si es un problema de manejo de objetos con las manos </label>
                                <input
                                    className="Survey__FormField__Checkbox"
                                    type="checkbox"
                                    value={label}
                                    checked={problemasManejarObjetos}
                                    onChange={this.toggleCheckboxChange}
                                />
                                <div className="Survey__FormField"></div>
                                <label className="Survey__FormField__Label1"> Marque aqui si es un problema de aprendizaje </label>
                                <input
                                    className="Survey__FormField__Checkbox"
                                    type="checkbox"
                                    value={label}
                                    checked={problemasAprendizaje}
                                    onChange={this.toggleCheckboxChange}
                                />
                                <div className="Survey__FormField"></div>
                                <label className="Survey__FormField__Label1"> Marque aqui si es un problema de comunicacion  </label>
                                <input
                                    className="Survey__FormField__Checkbox"
                                    type="checkbox"
                                    value={label}
                                    checked={problemasComunicacion}
                                    onChange={this.toggleCheckboxChange}
                                />
                                <div className="Survey__FormField"></div>
                                <label className="Survey__FormField__Label1"> Marque aqui si no tiene problema de salud o condicion que le cause algun inpedimento </label>
                                    <input
                                        className="Survey__FormField__Checkbox"
                                        type="checkbox"
                                        value={label}
                                        checked={noProblemas}
                                        onChange={this.toggleCheckboxChange}
                                    />
                                <div className="Survey__FormField"></div>
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label" htmlFor="name"> 14. Indique el grupo religioso al que pertenence </label>
                                    <Select className="Survey__FormField__Dropdown"
                                        styles={{menuList: (base) => ({ ...base, color: 'black' })}}
                                        value={religion}
                                        onChange={this.handleChangeReligion}
                                        options={religiones}
                                    />
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label" htmlFor="name"> 15. Indique su nivel academico </label>
                                        <Select className="Survey__FormField__Dropdown"
                                            styles={{menuList: (base) => ({ ...base, color: 'black' })}}
                                            value={nivelAcademico}
                                            onChange={this.handleChangeNivelAcademico}
                                            options={nivelesAcademicos}
                                        />
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label" htmlFor="name"> 16. ¿Esta en este momento estudiando o trabaja o ambas? </label>
                                        <Select className="Survey__FormField__Dropdown"
                                            styles={{menuList: (base) => ({ ...base, color: 'black' })}}
                                            value={situacionEOT}
                                            onChange={this.handleChangeSituacionEOT}
                                            options={situacionesEOT}
                                        />
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label" htmlFor="name"> 17. Aproximadamente ¿De cuanto son sus ingresos mensuales? </label>
                                        <Select className="Survey__FormField__Dropdown"
                                            styles={{menuList: (base) => ({ ...base, color: 'black' })}}
                                            value={ingresosMensual}
                                            onChange={this.handleChangeIngresosMensual}
                                            options={ingresosMensuales}
                                        />
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label" htmlFor="name"> 18. Si anteriormente respondio que trabaja ¿Cual es su situacion laboral? </label>
                                        <Select className="Survey__FormField__Dropdown"
                                            styles={{menuList: (base) => ({ ...base, color: 'black' })}}
                                            value={situacionLaboral}
                                            onChange={this.handleChangeSituacionLaboral}
                                            options={situacionesLaborales}
                                        />
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label"> 19. Si anteriormente respondio que trabaja, indique el nombre de la empresa en la que trabaja </label>
                                <input type="text" id="nombreEmpresa" className="Survey__FormField__Input" placeholder="Nombre de la empresa" name="nombreEmpresa" value={this.state.nombreEmpresa} onChange={this.handleInputChange}/>
                            </div>
                            <div className="Survey__FormField">
                                <label className="Survey__FormField__Label" htmlFor="name"> 20. Si anteriormente respondio que trabaja, indique cuantas horas trabaja a la semana </label>
                                        <Select className="Survey__FormField__Dropdown"
                                            styles={{menuList: (base) => ({ ...base, color: 'black' })}}
                                            value={horasLaboral}
                                            onChange={this.handleChangeHorasLaboral}
                                            options={horasLaborales}
                                        />
                            </div>
                            <div className="Survey__FormTitle">Recuerde revisar sus respuestas antes de enviar la encuesta, muchas gracias!!!!</div>
                            <div className="Survey__FormField">
                                <button className="Survey__FormField__Button" onClick={this.handleSubmit}>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    
}
export default Survey;