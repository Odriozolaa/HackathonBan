import { Component } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common'; 

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [CommonModule, NgForOf, NgIf], // Agrega los módulos necesarios
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css'] 
})
export class ModulesComponent {
  // Propiedad para controlar el módulo activo
  activeModule: number | null = null;

  // Mapa de contenido con los módulos de educación financiera
  contentMap = {
    "Conceptos Básicos de Finanzas Personales": {
      "resources": ["Introducción a Finanzas Personales: Las finanzas personales se refieren al manejo eficiente de los recursos financieros de un individuo o familia. Incluyen la gestión de ingresos, gastos, ahorros, inversiones y planificación financiera a largo plazo. El objetivo es lograr estabilidad y seguridad financiera, permitiendo cumplir metas como comprar una casa, financiar la educación o asegurar una jubilación cómoda.", "Presupuesto Básico: Un presupuesto básico es una herramienta esencial que ayuda a planificar y controlar los ingresos y gastos. Involucra listar todas las fuentes de ingresos y categorizar los gastos en esenciales (alquiler, comida, servicios) y no esenciales (entretenimiento, compras). Mantener un presupuesto permite identificar áreas de mejora, evitar gastos excesivos y fomentar el ahorro.", 
        "Ahorro vs. Inversión: Ahorro: Consiste en reservar parte de los ingresos para uso futuro, generalmente en cuentas de bajo riesgo y alta liquidez. El enfoque principal es la seguridad del capital. -- Inversión: Implica destinar dinero a activos o proyectos con el objetivo de generar rendimientos o ganancias a largo plazo. Las inversiones suelen conllevar mayor riesgo, pero también ofrecen la posibilidad de mayores retornos. "]
    },
    "Cómo Crear un Presupuesto": {
      "resources": ["Cómo Crear un Presupuesto: Registrar Ingresos: Anota todas las fuentes de ingresos mensuales netos. -- Listar Gastos: Clasifica los gastos en categorías y subcategorías. -- Establecer Límites: Asigna un monto máximo para cada categoría de gasto. -- Monitorear y Ajustar: Revisa regularmente el presupuesto y ajusta según sea necesario.", "Control de Gastos: El control de gastos es fundamental para mantener el presupuesto. Algunas estrategias incluyen: 1.-Registrar diariamente los gastos. 2.-Identificar y reducir gastos innecesarios. 3.-Utilizar efectivo en lugar de tarjetas para limitar el gasto impulsivo.", "Herramientas para Presupuesto: 1.-Aplicaciones móviles  2.-Hojas de cálculo  3.-Software especializado"]
    },
    "Ahorro vs. Inversión": {
      "resources": ["Introducción a Ahorro: El ahorro es fundamental para enfrentar emergencias y alcanzar metas financieras, recomendaciones incluyen automatizar transferencias, establecer objetivos realistas, y reducir gastos superfluos", "Tipos de Inversiones: Incluye acciones, bonos, fondos mutuos, y bienes raíces", "Riesgo y Rendimiento: Mayor riesgo implica mayor potencial de ganancias y de pérdidas, mientras menor riesgo asegura rendimientos modestos con más seguridad."]
    },
    "Estrategias de Ahorro": {
      "resources": ["Estrategias de Ahorro: Métodos como 50/30/20, ahorro automático, y reducción de deudas", "Ahorro a Largo Plazo: Planes de pensiones y aprovechar interés compuesto", "Inversiones de Bajo Riesgo: Certificados de depósito, bonos gubernamentales, y cuentas de ahorro de alto rendimiento."]
    },
    "Tipos de Cuentas de Ahorro": {
      "resources": ["Tipos de Cuentas: Cuenta de ahorro tradicional, cuenta del mercado monetario, cuenta de ahorro en línea", "Intereses y Beneficios: Interés compuesto y beneficios adicionales como recompensas", "Apertura de Cuentas: Seleccionar institución financiera, completar solicitud, y depositar fondos."]
    },
    "Introducción a las Inversiones": {
      "resources": ["Guía de Inversiones: Definir objetivos, evaluar tolerancia al riesgo y diversificar la cartera", "Riesgo y Rendimiento: Análisis de riesgo y equilibrio entre riesgo y objetivos", "Mercados Financieros: Bolsa de valores, mercado de bonos, mercados de divisas y derivados"]
    },
    "Gestión de Deudas": {
      "resources": ["Tipos de Deudas: Deuda garantizada (hipotecas, préstamos de auto) y no garantizada (tarjetas de crédito)", "Estrategias de Pago de Deudas: Métodos avalancha y bola de nieve", "Control de Créditos: Monitoreo del historial, mantener bajos los saldos y pagar a tiempo"]
    },
    "Planificación Financiera": {
      "resources": ["Establecimiento de Metas Financieras: Metas específicas, medibles, alcanzables, relevantes y con plazo definido", "Uso de Herramientas Financieras: Software de planificación y asesores financieros", "Presupuesto Personal: Debe reflejar prioridades, ser flexible e incluir un plan de ahorro e inversión"]
    },
    "Aspectos Fiscales de Inversiones": {
      "resources": ["Declaración de Impuestos: Declarar ingresos por inversiones y mantener registros precisos", "Beneficios Fiscales: Inversiones con ventajas fiscales y aprovechar deducciones y créditos", "Planificación Fiscal: Minimización de impuestos y asesoría profesional"]
    },
    "Ética Financiera": {
      "resources": ["Principios de Ética Financiera: Transparencia, integridad y responsabilidad", "Responsabilidad Financiera: Educación continua, cumplimiento de obligaciones y planificación consciente", "Sostenibilidad Financiera: Inversiones responsables, consumo consciente y apoyo a la comunidad"]
    }
  };

  modules = Object.entries(this.contentMap);

  // Método para alternar el estado del módulo activo
  toggleModule(index: number): void {
    console.log('Toggle module:', index); 
    this.activeModule = this.activeModule === index ? null : index;
  }
}