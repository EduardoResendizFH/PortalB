const express = require('express'),
      app = express();

      especificacionesGasolinas=[
              {
                  Propiedad:'Gravedad específica a 20/4 °C',
                  Unidad:'Adimensional',
                  Metodoprueba:'Procedimiento para densidad, densidad relativa (gravedad específica) o gravedad de petróleo crudo o productos de petróleo líquido por hidrómetro (ASTM D1298, D4052)',
                  valorLimite:{
                    GasolinaPremium:'Informar',
                    GasolinaRegular:'Informar'
                  }
              },
              {
                  Propiedad:'Índice de octano (RON+MON)/2(2)',
                  Unidad:'Adimensional',
                  Metodoprueba:'Número de octano Research de combustible para motores de encendido por chispa (ASTM D2699)  Número de octano Motor de combustibles para motores de encendido por chispa (ASTM D2700)',
                  valorLimite:{
                    GasolinaPremium:'91 mínimo',
                    GasolinaRegular:'87.0 mínimo'
                  }
              },
              {
                  Propiedad:'Azufre total',
                  Unidad:'mg/kg',
                  Metodoprueba:'Determinación de azufre total en hidrocarburos ligeros (ASTM D5453, D2622, D7039, D7220)',
                  valorLimite:{
                    GasolinaPremium:'30 promedio',
                    GasolinaRegular:'30 promedio '
                  }
              },
      ];

      dieselAutomotriz =[
                {
                    Propiedad:'Gravedad específica a 20/4°C',
                    Unidad:'Adimensional',
                    MetodoPrueba:'Densidad, densidad relativa (gravedad específica o gravedad de petróleo crudo y productos líquidos de petróleo por el método hidrométrico, ASTM D1298, D4052)',
                    valorLimite:{
                        DieselAutomotriz:'nformar'
                     }
                },
                {
                    Propiedad:'Temperatura de inflamación',
                    Unidad:'°C',
                    MetodoPrueba:'Temperatura de inflamabilidad: Prueba Pensky-Martens de copa cerrada (ASTM D93, D7094, D3828) ',
                    valorLimite:{
                        DieselAutomotriz:'45.0 mínimo'
                    }
                },
                {
                    Propiedad:'Índice de cetano',
                    Unidad:'Adimensional',
                    MetodoPrueba:'Cálculo del índice de cetano de combustibles destilados (ASTM D4737, D976)',
                    valorLimite:{
                        DieselAutomotriz:'45 Mínimo'
                    }
                },
                {
                    Propiedad:'Azufre',
                    Unidad:'mg/kg(ppm)',
                    MetodoPrueba:'Determinación de azufre en productos de petróleo por espectroscopia de rayos X de fluorescencia por dispersión de energía (ASTM D4294) Determinación de azufre total en hidrocarburos ligeros (ASTM D5453, D2622, D7039, D7220)',
                    valorLimite:{
                        DieselAutomotriz:'500 ppm máximo resto del país'
                    }
                }
      ];

      dieselDuba = [
                {
                    Propiedad:'Gravedad específica a 20/4°C',
                    Unidad:'Adimensional',
                    MetodoPrueba:'Densidad, densidad relativa (gravedad específica o gravedad de petróleo crudo y productos líquidos de petróleo por el método hidrométrico, ASTM D1298, D4052)',
                    valorLimite:{
                        DieselAutomotriz:'nformar'
                     }
                },
                {
                    Propiedad:'Temperatura de inflamación',
                    Unidad:'°C',
                    MetodoPrueba:'Temperatura de inflamabilidad: Prueba Pensky-Martens de copa cerrada (ASTM D93, D7094, D3828) ',
                    valorLimite:{
                        DieselAutomotriz:'45.0 mínimo'
                    }
                },
                {
                    Propiedad:'Índice de cetano',
                    Unidad:'Adimensional',
                    MetodoPrueba:'Cálculo del índice de cetano de combustibles destilados (ASTM D4737, D976)',
                    valorLimite:{
                        DieselAutomotriz:'45 mínimo'
                    }
                },
                {
                    Propiedad:'Azufre',
                    Unidad:'mg/kg(ppm)',
                    MetodoPrueba:'Determinación de azufre en productos de petróleo por espectroscopia de rayos X de fluorescencia por dispersión de energía (ASTM D4294) Determinación de azufre total en hidrocarburos ligeros (ASTM D5453, D2622, D7039, D7220)',
                    valorLimite:{
                        DieselAutomotriz:'18 ppm máximo resto del país'
                    }
                }
      ];

      turbosina = [
                {
                    Propiedad:'Densidad a 20 °C ',
                    Unidad:'kg/L',
                    MetodoPrueba:'ASTM D1298, Densidad, densidad relativa (gravedad específica) o gravedad de petróleo crudo y productos líquidos de petróleo por el método del hidrómetro. ASTM D4052 Densidad y densidad relativa de líquidos por medio de densitómetro digital',
                    ValorLimite:{
                        JetA1:'0.7720 a 0.8370'
                    }
                },
                {
                    Propiedad:'Temperatura de congelación',
                    Unidad:'°C',
                    MetodoPrueba:'-ASTM D2386, Temperatura de congelación para combustibles de aviación     - ASTM D5972, Temperatura de congelación para combustibles de aviación (Método Automático por Transición de Fases) -ASTM D7153, Temperatura de congelación para combustibles de aviación (Método Automático de Laser) -ASTM D7154, Temperatura de congelación para combustibles de aviación (Método Automático de Fibra Óptica) ',
                    ValorLimite:{
                        JetA1:'-47.0 máximo'
                    }
                },
                {
                    Propiedad:'Azufre Total',
                    Unidad:'mg/kg',
                    MetodoPrueba:'ASTM D4294, Determinación de azufre en productos de petróleo por espectroscopia de fluorescencia de rayos X por dispersión de energía  -ASTM D5453, Determinación de Azufre total en hidrocarburos ligeros, combustible para motores de ignición por chispa, combustible para motores a diésel y aceite para motor, por Fluorescencia ultravioleta -ASTM D2622, Azufre en productos del petróleo por medio de Espectrometría Fluorescente de energía dispersiva de Rayos X -ASTM D7039 Azufre en gasolina y diésel por medio de espectrometría por fluorescencia dispersiva de rayos X de longitud de onda monocromática',
                    ValorLimite:{
                        JetA1:'3000 máximo'
                    }
                },
                {
                    Propiedad:'Partículas contaminante',
                    Unidad:'mg/L- mg/gal (ISO)',
                    MetodoPrueba:'ASTM D2276, Partículas contaminantes en combustibles de aviación por muestreo por líneas.ASTM D5452, Partículas contaminantes en combustibles de aviación por filtración en laboratorio',
                    ValorLimite:{
                        JetA1:'1.0 máximo - 3.8 máximo'
                    }
                }
      ];

      //GET GASOLINA
      app.get('/gasolina', (req, res) =>{
          res.send(especificacionesGasolinas);
      });

      //GET DieselAu
      app.get('/dieselAu', (req, res) =>{
          res.send(dieselAutomotriz);
      });

      //GET DieselDuba
      app.get('/dieselDuba', (req, res) =>{
          res.send(dieselDuba);
      });

      //GET TURBOSINA
      app.get('/turbosina', (req, res) =>{
          res.send(turbosina);
      });

      module.exports = app;