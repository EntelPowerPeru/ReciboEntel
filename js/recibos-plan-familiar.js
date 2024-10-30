let dataPlanesFamiliares = [
  { name: "Entel Total 19.90", price: "19.9", es_nuevo: false},
  { name: "Entel Power 34.90 C", price: "34.9", es_nuevo: false},
  { name: "Entel Power Familiar 39.90 C", price: "39.9", es_nuevo: true},
  { name: "Entel Power 44.90 C", price: "44.9", es_nuevo: true},
  { name: "Entel Power Familiar 49.90 C", price: "49.9", es_nuevo: true},
  { name: "Entel Power 54.90 C", price: "54.9", es_nuevo: true},
  { name: "Entel Power Familiar 59.90 C", price: "59.9", es_nuevo: true},
  { name: "Entel Power Familiar 63.90 C", price: "63.9", es_nuevo: true},
  { name: "Entel Power 69.90 C", price: "69.9", es_nuevo: true},
  { name: "Entel Power Familiar 74.90 C", price: "74.9", es_nuevo: true},
  { name: "Entel Power 79.90 SD C", price: "79.9", es_nuevo: true},
  { name: "Entel Power Familiar 89.90 SD C", price: "89.9", es_nuevo: true},
  { name: "Entel Power Familiar 94.90 SD C", price: "94.9", es_nuevo: true},
  { name: "Entel Power 99.90 SD C", price: "99.9", es_nuevo: true},
  { name: "Entel Power Familiar 104.90 SD C", price: "104.9", es_nuevo: true},
  { name: "Entel Power 129.90 SD C", price: "129.9", es_nuevo: true},
  { name: "Entel Chip 199.90", price: "199.9", es_nuevo: false},
  { name: "Entel Power Familiar 199.90", price: "199.9", es_nuevo: true}
];
let dataMesCambio = [
  { name: "Enero", number: 1, canDias: 31 },
  { name: "Febrero", number: 2, canDias: 29 },
  { name: "Marzo", number: 3, canDias: 31 },
  { name: "Abril", number: 4, canDias: 30 },
  { name: "Mayo", number: 5, canDias: 31 },
  { name: "Junio", number: 6, canDias: 30 },
  { name: "Julio", number: 7, canDias: 31 },
  { name: "Agosto", number: 8, canDias: 31 },
  { name: "Setiembre", number: 9, canDias: 30 },
  { name: "Octubre", number: 10, canDias: 31 },
  { name: "Noviembre", number: 11, canDias: 30 },
  { name: "Diciembre", number: 12, canDias: 31 },
];
let dataCicloCliente = [
  { name: "Periodo 31", fechaInicio: 1 },
  { name: "Periodo 8", fechaInicio: 9 },
  { name: "Periodo 15", fechaInicio: 16 },
  { name: "Periodo 22", fechaInicio: 23 },
];
let dataPlanesBase = [
  { name: "Selecciona un plan base", price: "" },
  { name: "Entel Total 19.90", price: "19.9" },
  { name: "Entel Chip 22.90 PLUS", price: "22.9" },
  { name: "Entel Chip 22.90 REV", price: "22.9" },
  { name: "Entel Chip+ 22.90 PLUS", price: "22.9" },
  { name: "Postpago Simple 25", price: "25.0" },
  { name: "Entel Chip 27.90", price: "27.9" },
  { name: "Entel Chip 27.90 REV", price: "27.9" },
  { name: "Entel Simple+ 29.90", price: "29.9" },
  { name: "Entel Chip 29.90 REV", price: "29.9" },
  { name: "Entel chip+ 29.90 R", price: "29.9" },
  { name: "Entel Chip+ 29.90 REV", price: "29.9" },
  { name: "Entel Chip 31.40", price: "31.4" },
  { name: "Entel Chip 31.40 B", price: "31.4" },
  { name: "Entel Chip 31.40 REV", price: "31.4" },
  { name: "Postpago SIMple 31.40", price: "31.4" },
  { name: "Entel simple+ 32.90", price: "32.9" },
  { name: "Entel chip+ 32.90", price: "32.9" },
  { name: "Entel chip+ 32.90 REV", price: "32.9" },
  { name: "Entel Power 34.90 C", price: "34.9" },
  { name: "Entel Chip 35.90", price: "35.9" },
  { name: "Postpago SIMple 35.90 Plus", price: "35.9" },
  { name: "Entel Simple+ 39.90", price: "39.9" },
  { name: "Entel power familiar+ 39.90 R", price: "39.9" },
  { name: "Entel Chip 39.90 Plus", price: "39.9" },
  { name: "Entel Chip+ 39.90 CM", price: "39.9" },
  { name: "Entel Chip+ 39.90 R", price: "39.9" },
  { name: "Entel Power Familiar 39.90", price: "39.9" },
  { name: "Entel Power Familiar 39.90 C", price: "39.9" },
  { name: "Entel Simple+ 42.90", price: "42.9" },
  { name: "Entel power familiar+ 42.90 N", price: "42.9" },
  { name: "Entel Power Familiar+ 42.90 R", price: "42.9" },
  { name: "Entel chip+ 42.90", price: "42.9" },
  { name: "Entel Power Familiar+ 42.90", price: "42.9" },
  { name: "Entel Power 44.90 C", price: "44.9" },
  { name: "Entel Power Chip 44.90", price: "44.9" },
  { name: "Entel Chip 45.90 Plus", price: "45.9" },
  { name: "Entel Chip 45.90 REV", price: "45.9" },
  { name: "Postpago SIMple 45.90 Plus", price: "45.9" },
  { name: "Entel power+ 49.90", price: "49.9" },
  { name: "Entel Power+ 49.90 CM", price: "49.9" },
  { name: "Entel Power+ 49.90 R", price: "49.9" },
  { name: "Entel power familiar+ 49.90 R", price: "49.9" },
  { name: "Entel Power Familiar 49.90 C", price: "49.9" },
  { name: "Entel Chip 49.90 Plus", price: "49.9" },
  { name: "Entel Chip 49.90 Plus A", price: "49.9" },
  { name: "Entel Power 49.90", price: "49.9" },
  { name: "Entel Chip 52.90 Plus", price: "52.9" },
  { name: "Entel Power Familiar 52.90", price: "52.9" },
  { name: "Entel power+ 53.90", price: "53.9" },
  { name: "Entel power familiar+ 53.90 N", price: "53.9" },
  { name: "Entel Power Familiar+ 53.90 R", price: "53.9" },
  { name: "Entel Chip 53.90 Plus", price: "53.9" },
  { name: "Entel Chip 53.90 Plus B", price: "53.9" },
  { name: "Entel Power Familiar+ 53.90", price: "53.9" },
  { name: "Entel Power 54.90 C", price: "54.9" },
  { name: "Entel Power+ 55.90 CM", price: "55.9" },
  { name: "Entel Power+ 55.90 R", price: "55.9" },
  { name: "Entel power+ 59.90", price: "59.9" },
  { name: "Entel Power+ 59.90 R", price: "59.9" },
  { name: "Entel Simple+ 59.90", price: "59.9" },
  { name: "Entel power familiar+ 59.90 N", price: "59.9" },
  { name: "Entel power familiar+ 59.90 R", price: "59.9" },
  { name: "Entel Chip 59.90 Plus", price: "59.9" },
  { name: "Entel Chip 59.90 Plus B", price: "59.9" },
  { name: "Entel Power Familiar 59.90", price: "59.9" },
  { name: "Entel Power Familiar 59.90 C", price: "59.9" },
  { name: "Entel Power Familiar+ 59.90", price: "59.9" },
  { name: "Entel power+ 63.90", price: "63.9" },
  { name: "Entel power familiar+ 63.90 N", price: "63.9" },
  { name: "Entel Chip 63.90", price: "63.9" },
  { name: "Entel power familiar 63.90", price: "63.9" },
  { name: "Entel Power Familiar 63.90 C", price: "63.9" },
  { name: "Entel Power Familiar+ 63.90", price: "63.9" },
  { name: "Entel Power 65.90 A", price: "65.9" },
  { name: "Entel Power 65.90 H", price: "65.9" },
  { name: "Entel Power Chip 66.90", price: "66.9" },
  { name: "Entel Chip 69.90 Plus", price: "69.9" },
  { name: "Entel Chip 69.90 Plus B", price: "69.9" },
  { name: "Entel Power 69.90 C", price: "69.9" },
  { name: "Entel Power 69.90 P", price: "69.9" },
  { name: "Entel power+ 74.90 R", price: "74.9" },
  { name: "Retail Entel 74.90", price: "74.9" },
  { name: "Entel Power Familiar 74.90 C", price: "74.9" },
  { name: "Entel power familiar+ 74.90 R", price: "74.9" },
  { name: "Entel Power 74.90 A", price: "74.9" },
  { name: "Entel power+ 79.90", price: "79.9" },
  { name: "Entel power familiar+ 79.90 N", price: "79.9" },
  { name: "Entel Power Familiar+ 79.90 R", price: "79.9" },
  { name: "Entel Chip 79.90 Plus", price: "79.9" },
  { name: "Entel Power 79.90", price: "79.9" },
  { name: "Entel Power 79.90 B", price: "79.9" },
  { name: "Entel Power 79.90 SD C", price: "79.9" },
  { name: "Entel Power Familiar 79.90", price: "79.9" },
  { name: "Entel Power Familiar+ 79.90", price: "79.9" },
  { name: "Entel Control 89.90", price: "89.9" },
  { name: "Entel Chip 89.90", price: "89.9" },
  { name: "Entel Power 89.90 A", price: "89.9" },
  { name: "Entel Power 89.90 SD R", price: "89.9" },
  { name: "Entel Power Familiar 89.90 SD C", price: "89.9" },
  { name: "Entel power familiar 89.90 SD R", price: "89.9" },
  { name: "Entel Power Familiar 89.90", price: "89.9" },
  { name: "Entel Power Familiar 94.90 SD", price: "94.9" },
  { name: "Entel Chip 94.90", price: "94.9" },
  { name: "Entel power 94.90 SD", price: "94.9" },
  { name: "Entel Power Familiar 94.90 SD C", price: "94.9" },
  { name: "Entel power familiar 94.90 SD N", price: "94.9" },
  { name: "Entel Chip 99.90", price: "99.9" },
  { name: "Entel Chip 99.90 Plus", price: "99.9" },
  { name: "Entel Power 99.90", price: "99.9" },
  { name: "Entel Power 99.90 B", price: "99.9" },
  { name: "Entel Power 99.90 SD C", price: "99.9" },
  { name: "Entel Power Familiar 99.90", price: "99.9" },
  { name: "Entel Libre 104.80", price: "104.8" },
  { name: "Entel power 104.90 SD", price: "104.9" },
  { name: "Entel Power Familiar 104.90 SD", price: "104.9" },
  { name: "Retail Entel 104.90", price: "104.9" },
  { name: "Retail Power 104.90", price: "104.9" },
  { name: "Entel Power Familiar 104.90 SD C", price: "104.9" },
  { name: "Entel power familiar 104.90 SD N", price: "104.9" },
  { name: "Entel Power Familiar 104.90", price: "104.9" },
  { name: "Entel Power 109.90", price: "109.9" },
  { name: "Entel Chip 109.90 Plus", price: "109.9" },
  { name: "Entel Power 115.90", price: "115.9" },
  { name: "Entel Chip 115.90 Plus", price: "115.9" },
  { name: "Entel Power Familiar 115.90", price: "115.9" },
  { name: "Entel Chip 120.80", price: "120.8" },
  { name: "Entel Chip 126.90", price: "126.9" },
  { name: "Entel Power 129.90", price: "129.9" },
  { name: "Entel Power 129.90 A", price: "129.9" },
  { name: "Entel Power 129.90 SD C", price: "129.9" },
  { name: "Entel Power Familiar 129.90 SD", price: "129.9" },
  { name: "Retail Entel 129.90", price: "129.9" },
  { name: "Retail Power 129.90", price: "129.9" },
  { name: "Entel Chip 129.90 Plus", price: "129.9" },
  { name: "Entel power familiar 129.90 SD N", price: "129.9" },
  { name: "Entel Power Familiar 129.90", price: "129.9" },
  { name: "Entel Chip 145.90", price: "145.9" },
  { name: "Entel Libre 149.90", price: "149.9" },
  { name: "Entel Control 149.90", price: "149.9" },
  { name: "Entel Chip 155.90", price: "155.9" },
  { name: "Entel Libre 159.90", price: "159.9" },
  { name: "Entel Power 159.90 5G", price: "159.9" },
  { name: "Retail Entel 159.90", price: "159.9" },
  { name: "Retail Power 159.90", price: "159.9" },
  { name: "Entel Chip 159.90 PLUS", price: "159.9" },
  { name: "Entel Power Familiar 159.90", price: "159.9" },
  { name: "Entel Power Familiar 179.90", price: "179.9" },
  { name: "Entel Chip 199.90", price: "199.9" },
  { name: "Entel Chip 199.90 Libre", price: "199.9" },
  { name: "Entel Power Familiar 199.90", price: "199.9" },
  { name: "Entel Power Familiar 259.90", price: "259.9" },
  { name: "Entel Power Familiar 299.90", price: "299.9" },
];

// import html2pdf from "html2pdf.js";

class RecibosPlanesFamiliares {
  constructor() {
    // vars
    this.form = "#recibos-plan-familiar";
    this.$form = document.querySelector(this.form);
    this.$button = this.$form.querySelector("button#e-button-enviar");
    this.$buttonReset = this.$form.querySelector("button#e-button-reset");
    this.$selectFamilyPlan = this.$form.querySelector("#plan-familiar");
    this.$selectCustomerCycle = this.$form.querySelector("#ciclo-cliente");
  }

  load() {
    this.loadDataSelect();
    this.mask();
    this.generateReceipt();
  }
  loadDataSelect() {
    dataPlanesFamiliares.forEach((x) => {
      this.$selectFamilyPlan.options.add(new Option(x.name, x.price));
    });
    dataCicloCliente.forEach((x) => {
      this.$selectCustomerCycle.options.add(new Option(x.name, x.fechaInicio));
    });
  }
  reset() {
    this.$form.reset();
  }

  mask() {
    $("#num-new-lines").mask("9");
    $("#num-base-lines").mask("9");
    $("#num-new-lines").mask("W", {
      translation: {
        W: {
          pattern: /[0-5]/,
          optional: false,
        },
      },
    });
    $("#num-base-lines").mask("X", {
      translation: {
        X: {
          pattern: /[0-5]/,
          optional: false,
        },
      },
    });
  }

  obtenerFecha(input, tipo = "") {
    const fecha = input.value.split("-");
    let valor;

    if (!fecha) {
      return "";
    }

    switch (tipo) {
      case "dia":
        valor = Number(fecha[2]);
        break;
      case "mes":
        valor = Number(fecha[1]);
        break;
      case "año":
        valor = Number(fecha[0]);
        break;
      default:
        valor = fecha.join("-");
    }

    return valor;
  }

  generateReceipt() {
    let cantidadLineasBase = 0,
      cantidadLineasNuevas = 0;
    let sumaLineas = 0;
    const containerReceipt = document.querySelector(
      ".recibos-plan-familiar-recibo"
    );

    const valNumnewlines = document.querySelector("#num-new-lines");
    const valNumbaselines = document.querySelector("#num-base-lines");
    const fechaActivacion = document.querySelector("#fecha-activacion");
    const selectFamilyPlan = document.querySelector("select#plan-familiar");
    const selectCustomerCycle = document.querySelector("select#ciclo-cliente");

    const btnGenerateRecibo = document.querySelector("#e-button-enviar");
    const linesGenerated = document.querySelector(
      ".recibos-plan-familiar__numberOfNewlinesBaseLines_generated"
    );
    const linesGeneratedInputs = document.querySelectorAll(
      ".recibos-plan-familiar__numberOfNewlinesBaseLines input"
    );
    const inputsForm = document.querySelectorAll(
      "#recibos-plan-familiar input[type='text']"
    );
    const selectForm = document.querySelectorAll("select");
    const btnPdfConvert = document.querySelector("#btn-convert-html-to-pdf");
    const containerReceiptGenerated = document.querySelector(
      ".recibo_line_description"
    );

    containerReceipt.style.display = "none";
    valNumnewlines.required = true;
    valNumbaselines.required = true;
    fechaActivacion.required = true;
    selectFamilyPlan.required = true;
    selectCustomerCycle.required = true;

    fechaActivacion.max = new Date().toISOString().split("T")[0];

    let validationIsNan = (e) => {
      return isNaN(parseInt(e.trim())) ? parseInt(0) : parseInt(e.trim());
    };

    let validationLineasInputs = (e) => {
      sumaLineas =
        validationIsNan(valNumnewlines.value) +
        validationIsNan(valNumbaselines.value);

      if (
        e.value &&
        [1, 2, 3, 4, 5].includes(Number(valNumbaselines.value)) &&
        [1, 2, 3, 4, 5].includes(sumaLineas)
      ) {
        cantidadLineasBase = valNumbaselines.value;
        cantidadLineasNuevas = valNumnewlines.value;

        if (e.id === "num-base-lines") {
          generarLineas();
        }
      } else {
        linesGenerated.innerHTML = "";
        cantidadLineasBase = 0;
      }
    };

    let generarLineas = () => {
      linesGenerated.innerHTML = "";

      for (let w = 0, l = cantidadLineasBase; w < l; w++) {
        let selectBasicPln = document.createElement("select");
        selectBasicPln.name = "plan-base";
        selectBasicPln.id = `plan-base${w}`;
        selectBasicPln.required = true;
        dataPlanesBase.forEach((x) => {
          selectBasicPln.options.add(new Option(x.name, x.price));
        });

        let planBaseUnified = document.createElement("div");
        planBaseUnified.classList.add(
          "e-input",
          "e-input--select",
          "e-input--light",
          "e-input--small"
        );
        planBaseUnified.id = `selectContainer${w}`;

        planBaseUnified.appendChild(selectBasicPln);

        if(l > 1 && w === 0) {
          let boton = document.createElement("button");
          boton.type = "button";
          boton.disabled = true;
          boton.classList.add("e-button-custom", "e-button--orange");
          boton.innerHTML = "Aplicar mismo plan para los demas";
          boton.id = "btn-mismo-plan";
          boton.style.marginLeft = "1rem";

          planBaseUnified.appendChild(boton);
          planBaseUnified.style.display = "flex";
        }

        linesGenerated.appendChild(planBaseUnified);
        // linesGenerated.insertAdjacentHTML("beforeend", planBaseUnified);
      }
    };

    let validationInputsForm = () => {
      const selectBasicplan = document.querySelector(
        "select[name='plan-base']"
      );
      if (selectBasicplan) {
        if (
          valNumnewlines.value &&
          valNumbaselines.value &&
          this.obtenerFecha(fechaActivacion, "dia") &&
          selectFamilyPlan.value &&
          this.obtenerFecha(fechaActivacion, "mes") &&
          selectCustomerCycle.value &&
          selectBasicplan.value
        ) {
          btnGenerateRecibo.classList.remove("e-button--disabled");
          btnGenerateRecibo.classList.add("e-button--orange");
        } else {
          btnGenerateRecibo.classList.remove("e-button--orange");
          btnGenerateRecibo.classList.add("e-button--disabled");
        }
      } else {
        if (
          valNumnewlines.value &&
          valNumbaselines.value &&
          this.obtenerFecha(fechaActivacion, "dia") &&
          selectFamilyPlan.value &&
          this.obtenerFecha(fechaActivacion, "mes") &&
          selectCustomerCycle.value
        ) {
          btnGenerateRecibo.classList.remove("e-button--disabled");
          btnGenerateRecibo.classList.add("e-button--orange");
        } else {
          btnGenerateRecibo.classList.remove("e-button--orange");
          btnGenerateRecibo.classList.add("e-button--disabled");
        }
      }
    };
    let btnGenerateReceiptFunction = (event) => {
      let totalDsctoBeneficioXLineaAdicional = 0;
      let totalPagarPrimerRecibo = 0;
      let totalPagarSegundoRecibo = 0;
      let diferenciaFechaCicloDiaCambio = 0;
      let diferenciaDiaCambioFechaCiclo = 0;
      let dsctoPlanFamiliar = 0;
      let calcularProrrateo = 0;
      let planHogarSeleccionado =
        this.$selectFamilyPlan.options[this.$selectFamilyPlan.selectedIndex]
          .text;
      let planHogarSeleccionadoPrice =
        this.$selectFamilyPlan.options[this.$selectFamilyPlan.selectedIndex]
          .value;
      let alphabetCounter = 0;
      const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

      /*let getDiasMesCambioActual = dataMesCambio.find(
        (e) => this.obtenerFecha(fechaActivacion, "mes") === e.number
      ).canDias;*/
      let getDiasMesCambioActual = 31;

      let getDiasMesCambioAnterior;

      if (this.obtenerFecha(fechaActivacion, "mes") === 1) {
        getDiasMesCambioAnterior = 31;
      } else {
        const mes_anterior = this.obtenerFecha(fechaActivacion, "mes") - 1;
        getDiasMesCambioAnterior = dataMesCambio.find(
          (e) => mes_anterior === e.number
        ).canDias;
      }

      let getFechaCiclo =
        this.$selectCustomerCycle[this.$selectCustomerCycle.selectedIndex]
          .value;
      let getDiaCambio = this.obtenerFecha(fechaActivacion, "dia");
      event.preventDefault();
      btnGenerateRecibo.classList.remove("e-button--orange");
      btnGenerateRecibo.classList.add("e-button--disabled");

      containerReceipt.style.display = "block";
      window.scrollTo({
        top: 1500,
        behavior: "smooth",
      });
      btnPdfConvert.style.display = "block";

      containerReceiptGenerated.innerHTML = "";

      if (parseFloat(getDiaCambio) < parseFloat(getFechaCiclo)) {
        diferenciaFechaCicloDiaCambio =
          parseFloat(getFechaCiclo) - parseFloat(getDiaCambio);
        diferenciaDiaCambioFechaCiclo =
          parseFloat(getDiasMesCambioAnterior) -
          (parseFloat(getFechaCiclo) - parseFloat(getDiaCambio));
        dsctoPlanFamiliar = parseFloat(
          parseFloat(
            parseFloat(planHogarSeleccionadoPrice) /
              parseFloat(getDiasMesCambioAnterior)
          ) *
            parseFloat(parseFloat(getFechaCiclo) - parseFloat(getDiaCambio)) *
            parseFloat(parseFloat(sumaLineas) - 1) *
            parseFloat(
              parseFloat(parseFloat(planHogarSeleccionadoPrice) - 34.9) /
                parseFloat(planHogarSeleccionadoPrice)
            ) *
            -1
        );

        calcularProrrateo = parseFloat(
          (parseFloat(planHogarSeleccionadoPrice) / parseFloat(getDiasMesCambioActual)) * (parseFloat(diferenciaFechaCicloDiaCambio))
        );
      } else {
        diferenciaFechaCicloDiaCambio =
          parseFloat(getDiasMesCambioActual) -
          parseFloat(getDiaCambio) +
          parseFloat(getFechaCiclo);
        diferenciaDiaCambioFechaCiclo =
          parseFloat(getDiaCambio) - parseFloat(getFechaCiclo);
        dsctoPlanFamiliar =
          (((parseFloat(planHogarSeleccionadoPrice) /
            parseFloat(getDiasMesCambioActual)) *
            (parseFloat(getDiasMesCambioActual) -
              parseFloat(getDiaCambio) +
              parseFloat(getFechaCiclo)) *
            (parseFloat(sumaLineas) - 1) *
            (parseFloat(planHogarSeleccionadoPrice) - 34.9)) /
            parseFloat(planHogarSeleccionadoPrice)) *
          -1;
        calcularProrrateo = parseFloat(
          (parseFloat(planHogarSeleccionadoPrice) /
            parseFloat(getDiasMesCambioActual)) *
            (parseFloat(getDiasMesCambioActual) +
              (parseFloat(getFechaCiclo) - parseFloat(getDiaCambio)))
        );
      }

      // VERIFICAR SI AMBAS LINEAS TIENEN EL MISMO PLAN
      let tienen_mismo_plan = true;
      document.querySelectorAll("select[name=plan-base]").forEach((x) => {
        const texto = x.options[x.selectedIndex].text;
        if (texto !== planHogarSeleccionado) {
          tienen_mismo_plan = false;
        }
      });
      tienen_mismo_plan = !document.querySelectorAll("select[name=plan-base]").length ? false : tienen_mismo_plan;

      let dsctoPrimerRecibo = parseFloat(
        (parseFloat(planHogarSeleccionadoPrice) - 34.9) * -1
      ).toFixed(0);
      let numeroLineaBase = Number(valNumbaselines.value);
      let totalDSctoBeneficioXLineaNueva = (Number(dsctoPrimerRecibo) * Number(valNumnewlines.value));
      totalDsctoBeneficioXLineaAdicional = Number(valNumbaselines.value) === 0 ? (Number(dsctoPrimerRecibo) * (Number(valNumnewlines.value) - 1)) : (totalDSctoBeneficioXLineaNueva * numeroLineaBase);
      let prorrateoDscto = ((tienen_mismo_plan ? totalDSctoBeneficioXLineaNueva : totalDsctoBeneficioXLineaAdicional) / getDiasMesCambioActual) * diferenciaFechaCicloDiaCambio;
      let totalDsctoGeneral = totalDsctoBeneficioXLineaAdicional + prorrateoDscto;

      let cuentaCliente = `<div class="descripcion-plan-cuenta-cliente bg-DCECF4">
            <p class="e-tc--blue">Descuento General</p>
            <p class="e-tc--blue"></p>
            <p class="e-tc--blue">${parseFloat(totalDsctoGeneral).toFixed(2)}</p>
          </div>
          <div class="descripcion-plan-dscto-plan-familiar bg-white">
            <p></p>
            <p>Descuento</p>
            <p>${parseFloat(totalDsctoBeneficioXLineaAdicional).toFixed(2)}</p>
          </div>
          <div class="descripcion-plan-dscto-plan-familiar bg-white">
            <p></p>
            <p>Prorrateo de descuento</p>
            <p>${parseFloat(prorrateoDscto).toFixed(2)}</p>
          </div>`;
      let dsctoPrimerReciboHtml = `<div class="descripcion-plan-dscto-primer-recibo bg-white">
          <p></p>
          <p>Descuento Beneficio por Linea Adicional</p>
          <p>${dsctoPrimerRecibo}</p>
        </div>`;
      let formularioDsctoExclusivo = `<div class="descripcion-dscto-exclusivo bg-white">
        <div style="border: 1px dashed black; border-radius: 5px; padding: 1rem;">
          <p style="text-align: center; margin: 0;">¿Descuento exclusivo?</p>

          <div style="display: flex; justify-content: space-between; margin-top: 1rem;">
              <label>Si <input type="radio" value="1" name="aplica_descuento_exclusivo" /></label>
              
              <label>No <input type="radio" value="0" name="aplica_descuento_exclusivo" /></label>
          </div>
          
          <select style="width: 100%; height: 30px !important; margin-top: 1rem; display: none;" name="tipo_descuento_exclusivo">
              <option selected value=""></option>
              <option value="20">20% X 3 MESES</option>
              <option value="30">30% X 3 MESES</option>
              <option value="30">30% X 6 MESES</option>
              <option value="50">50% X 6 MESES</option>
              <option value="50">50% X 12 MESES</option>
          </select>
        </div>
      </div>`;

        //totalPagarPrimerRecibo += dsctoPlanFamiliar;
      totalPagarPrimerRecibo += Number(totalDsctoGeneral.toFixed(2));

      for (let w = 0, l = parseInt(valNumnewlines.value); w < l; w++) {
        let totalLineaNueva = parseFloat(
          parseFloat(planHogarSeleccionadoPrice) +
            parseFloat(calcularProrrateo) +
            parseFloat(dsctoPrimerRecibo)
        ).toFixed(2);
        let TotalLineaNueva = (e) => {
          if (e == 0) {
            return parseFloat(
              parseFloat(planHogarSeleccionadoPrice) +
                parseFloat(calcularProrrateo)
            ).toFixed(2);
          } else {
            return parseFloat(
              parseFloat(planHogarSeleccionadoPrice) +
                parseFloat(calcularProrrateo) +
                parseFloat(dsctoPrimerRecibo)
            ).toFixed(2);
          }
        };

        /*totalPagarPrimerRecibo +=
          w == 0
            ? parseFloat(
                parseFloat(planHogarSeleccionadoPrice) +
                  parseFloat(calcularProrrateo)
              )
            : parseFloat(
                parseFloat(planHogarSeleccionadoPrice) +
                  parseFloat(calcularProrrateo) +
                  parseFloat(dsctoPrimerRecibo)
              );*/
        totalPagarPrimerRecibo += Number(parseFloat(parseFloat(planHogarSeleccionadoPrice) + parseFloat(calcularProrrateo)).toFixed(2));

        let lineasNuevasUnified = `<div id="new_line_description_item${w}" class="recibo_new_line_description_item">
              <div class="descripcion-plan descripcion-plan-precio bg-DCECF4">
                <p class="e-tc--blue">Línea Nueva ${alphabet[
                  alphabetCounter
                ].toUpperCase()}</p>
                <p class="e-tc--blue">${planHogarSeleccionado}</p>
                <p class="e-tc--blue">${
                  parseFloat(
                        parseFloat(planHogarSeleccionadoPrice) +
                          parseFloat(calcularProrrateo)
                      ).toFixed(2)
                }</p>
              </div>
              <div class="descripcion-plan-plan bg-white">
                <p></p>
                <p>Plan</p>
                <p>${planHogarSeleccionadoPrice}</p>
              </div>
              <div class="descripcion-plan-prorrateo bg-white">
                <p></p>
                <p>Prorrateo</p>
                <p>${parseFloat(calcularProrrateo).toFixed(2)}</p>
              </div>
              <div class="descripcion-plan-cargo-prorrateo bg-white">
                <p></p>
                <p>Cargo Prorrateo ${planHogarSeleccionado}</p>
                <p>${parseFloat(calcularProrrateo).toFixed(2)}</p>
              </div>
              ${formularioDsctoExclusivo}
            </div>`;
        containerReceiptGenerated.insertAdjacentHTML(
          "beforeend",
          lineasNuevasUnified
        );
        alphabetCounter++;
      }
      // cantidadLineasNuevas = 0;

      for (let w = 0, l = parseInt(valNumbaselines.value); w < l; w++) {
        //totalDsctoBeneficioXLineaAdicional += dsctoPrimerRecibo;
        let calcularCargoProrrateoBase = 0;
        if (parseFloat(getDiaCambio) < parseFloat(getFechaCiclo)) {
          calcularCargoProrrateoBase = parseFloat(
            (parseFloat(
              document.querySelectorAll(
                "select[name='plan-base'] option:checked"
              )[w].value
            ) /
              parseFloat(getDiasMesCambioAnterior)) *
              parseFloat(diferenciaDiaCambioFechaCiclo)
          ).toFixed(2);
        } else {
          calcularCargoProrrateoBase = parseFloat(
            (parseFloat(
              document.querySelectorAll(
                "select[name='plan-base'] option:checked"
              )[w].value
            ) /
              parseFloat(getDiasMesCambioActual)) *
              (parseFloat(getDiaCambio) - parseFloat(getFechaCiclo))
          ).toFixed(2);
        }
        /*let calcularDevolucionProrrateo = parseFloat(
          parseFloat(
            document.querySelectorAll(
              "select[name='plan-base'] option:checked"
            )[w].value
          ) * -1
        ).toFixed(1);*/
        let calcularDevolucionProrrateo = tienen_mismo_plan ? 0 : ((( parseFloat(
          document.querySelectorAll(
            "select[name='plan-base'] option:checked"
          )[w].value
        ) / getDiasMesCambioActual) * (parseFloat(getFechaCiclo) - parseFloat(getDiaCambio)) )  * -1);
        
        /*let calcularProrrateoPlanFamiliar = parseFloat(
          parseFloat(calcularProrrateo) +
            parseFloat(calcularDevolucionProrrateo) +
            parseFloat(calcularCargoProrrateoBase)
        ).toFixed(2);*/
        let calcularProrrateoPlanFamiliar = tienen_mismo_plan ? 0 : parseFloat(
          parseFloat(calcularProrrateo) +
            parseFloat(calcularDevolucionProrrateo)
        ).toFixed(2);
        let totalDsctMiPrimerRecibo = parseFloat(
          parseFloat(planHogarSeleccionadoPrice) +
            parseFloat(calcularProrrateoPlanFamiliar) +
            parseFloat(dsctoPrimerRecibo)
        ).toFixed(2);

        let dsctoPrimerReciboHtmlBase = (e) => {
          if (e != 0) {
            return dsctoPrimerReciboHtml;
          } else {
            return "";
          }
        };
        let TotalDsctMiPrimerRecibo = (e) => {
          if (tienen_mismo_plan) {
            return parseFloat(parseFloat(planHogarSeleccionadoPrice));
          } else if (e == 0) {
            return parseFloat(
              parseFloat(planHogarSeleccionadoPrice) +
                parseFloat(calcularProrrateoPlanFamiliar)
            ).toFixed(2);
          } else {
            return parseFloat(
              parseFloat(planHogarSeleccionadoPrice) +
                parseFloat(calcularProrrateo) +
                parseFloat(calcularDevolucionProrrateo)
            ).toFixed(2);
          }
        };

        /*totalPagarPrimerRecibo +=
          valNumnewlines.value == 0
            ? parseFloat(TotalDsctMiPrimerRecibo(w))
            : parseFloat(totalDsctMiPrimerRecibo);*/

        totalPagarPrimerRecibo += Number(parseFloat(TotalDsctMiPrimerRecibo(w)).toFixed(2));
        // dsctoPrimerReciboHtmlBase = dsctoPrimerReciboHtml;
        let lineasBaseUnified = `<div id="new_line_description_item${w}" class="recibo_new_line_description_item">
              <div class="descripcion-plan descripcion-plan-precio bg-DCECF4">
                <p class="e-tc--blue">Línea Base ${alphabet[
                  alphabetCounter
                ].toUpperCase()}</p>
                <p class="e-tc--blue">${planHogarSeleccionado}</p>
                <p class="e-tc--blue">${TotalDsctMiPrimerRecibo(w)}</p>
              </div>
              <div class="descripcion-plan-plan bg-white">
                <p></p>
                <p>Plan</p>
                <p>${planHogarSeleccionadoPrice}</p>
              </div>
              ${tienen_mismo_plan ? "" : 
              `<div class="descripcion-plan-prorrateo bg-white">
                <p></p>
                <p>Prorrateo</p>
                <p>${calcularProrrateoPlanFamiliar}</p>
              </div>
              <div class="descripcion-plan-cargo-prorrateo bg-white">
                <p></p>
                <p>Cargo Prorrateo ${planHogarSeleccionado}</p>
                <p>${parseFloat(calcularProrrateo).toFixed(2)}</p>
              </div>
              <div class="descripcion-plan-devolucion-prorrateo-base bg-white">
                <p></p>
                <p>Devolución Prorrateo ${
                  document.querySelectorAll(
                    "select[name='plan-base'] option:checked"
                  )[w].text
                }</p>
                <p>${calcularDevolucionProrrateo.toFixed(2)}</p>
              </div>`
              }
            </div>`;

        containerReceiptGenerated.insertAdjacentHTML(
          "beforeend",
          lineasBaseUnified
        );

        alphabetCounter++;
      }

      totalPagarSegundoRecibo =
        parseFloat(selectFamilyPlan.value) +
        34.9 *
          (parseFloat(valNumnewlines.value) +
            parseFloat(valNumbaselines.value) -
            1);

      const totalRecibo = `<div class="descripcion-total-recibo bg-DCECF4">
        <p style="color: #000; text-align: center; font-size: 1.2rem;">Total a pagar estimado en primer recibo: <b style="color: #000;">S/${parseFloat(
          totalPagarPrimerRecibo
        ).toFixed(2)}</b></p>
        <p style="color: #000; text-align: center; font-size: 1rem;">Desde segundo recibo: <b style="color: #000;">S/${parseFloat(
          totalPagarSegundoRecibo
        ).toFixed(2)}</b></p>
      </d>`;

      containerReceiptGenerated.insertAdjacentHTML("beforeend", cuentaCliente);

      containerReceiptGenerated.insertAdjacentHTML("beforeend", totalRecibo);

      cantidadLineasBase = 0;
      this.$form.reset();
      btnPdfConvert.addEventListener("click", (e) => {
        let element = document.getElementById("pdf-recibo");
        let opt = {
          margin: 0.3,
          filename: "Recibo-plan-familiar.pdf",
          enableLinks: false,
          html2canvas: { windowWidth: 100, backgroundColor: "#ffffff" },
          jsPDF: {
            orientation: "p",
            unit: "mm",
            format: "a4",
            putOnlyUsedFonts: true,
            floatPrecision: 16,
          },
        };
        html2pdf().set(opt).from(element).save();
      });
      this.$buttonReset.addEventListener("click", (e) => {
        this.$form.reset();
        containerReceiptGenerated.innerHTML = "";
        linesGenerated.innerHTML = "";
        containerReceipt.style.display = "none";
        btnGenerateRecibo.classList.remove("e-button--orange");
        btnGenerateRecibo.classList.add("e-button--disabled");
      });
    };

    let btnGenerateReceiptFunctionNuevo = (event) => {
      let totalPagarPrimerRecibo = 0;
      let totalPagarSegundoRecibo = 0;
      let diferenciaFechaCicloDiaCambio = 0;
      let diferenciaDiaCambioFechaCiclo = 0;
      let dsctoPlanFamiliar = 0;
      let calcularProrrateo = 0;
      let planHogarSeleccionado =
        this.$selectFamilyPlan.options[this.$selectFamilyPlan.selectedIndex]
          .text;
      let planHogarSeleccionadoPrice =
        this.$selectFamilyPlan.options[this.$selectFamilyPlan.selectedIndex]
          .value;
      let alphabetCounter = 0;
      const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

      let getDiasMesCambioActual = dataMesCambio.find(
        (e) => this.obtenerFecha(fechaActivacion, "mes") === e.number
      ).canDias;

      let getDiasMesCambioAnterior;

      if (this.obtenerFecha(fechaActivacion, "mes") === 1) {
        getDiasMesCambioAnterior = 31;
      } else {
        const mes_anterior = this.obtenerFecha(fechaActivacion, "mes") - 1;
        getDiasMesCambioAnterior = dataMesCambio.find(
          (e) => mes_anterior === e.number
        ).canDias;
      }

      let getFechaCiclo =
        this.$selectCustomerCycle[this.$selectCustomerCycle.selectedIndex]
          .value;
      let getDiaCambio = this.obtenerFecha(fechaActivacion, "dia");
      event.preventDefault();
      btnGenerateRecibo.classList.remove("e-button--orange");
      btnGenerateRecibo.classList.add("e-button--disabled");

      containerReceipt.style.display = "block";
      window.scrollTo({
        top: 1500,
        behavior: "smooth",
      });
      btnPdfConvert.style.display = "block";

      containerReceiptGenerated.innerHTML = "";

      if (parseFloat(getDiaCambio) < parseFloat(getFechaCiclo)) {
        diferenciaFechaCicloDiaCambio =
          parseFloat(getFechaCiclo) - parseFloat(getDiaCambio);
        diferenciaDiaCambioFechaCiclo =
          parseFloat(getDiasMesCambioAnterior) -
          (parseFloat(getFechaCiclo) - parseFloat(getDiaCambio));
        dsctoPlanFamiliar = parseFloat(
          parseFloat(
            parseFloat(planHogarSeleccionadoPrice) /
              parseFloat(getDiasMesCambioAnterior)
          ) *
            parseFloat(parseFloat(getFechaCiclo) - parseFloat(getDiaCambio)) *
            parseFloat(parseFloat(sumaLineas) - 1) *
            parseFloat(
              parseFloat(parseFloat(planHogarSeleccionadoPrice) - 34.9) /
                parseFloat(planHogarSeleccionadoPrice)
            ) *
            -1
        );

        calcularProrrateo = parseFloat(
          (parseFloat(planHogarSeleccionadoPrice) /
            parseFloat(getDiasMesCambioAnterior)) *
            (parseFloat(getFechaCiclo) - parseFloat(getDiaCambio))
        );
      } else {
        diferenciaFechaCicloDiaCambio =
          parseFloat(getDiasMesCambioActual) -
          parseFloat(getDiaCambio) +
          parseFloat(getFechaCiclo);
        diferenciaDiaCambioFechaCiclo =
          parseFloat(getDiaCambio) - parseFloat(getFechaCiclo);
        dsctoPlanFamiliar =
          (((parseFloat(planHogarSeleccionadoPrice) /
            parseFloat(getDiasMesCambioActual)) *
            (parseFloat(getDiasMesCambioActual) -
              parseFloat(getDiaCambio) +
              parseFloat(getFechaCiclo)) *
            (parseFloat(sumaLineas) - 1) *
            (parseFloat(planHogarSeleccionadoPrice) - 34.9)) /
            parseFloat(planHogarSeleccionadoPrice)) *
          -1;
        calcularProrrateo = parseFloat(
          (parseFloat(planHogarSeleccionadoPrice) /
            parseFloat(getDiasMesCambioActual)) *
            (parseFloat(getDiasMesCambioActual) +
              (parseFloat(getFechaCiclo) - parseFloat(getDiaCambio)))
        );
      }

      let dsctoPrimerRecibo = parseFloat(
        (parseFloat(planHogarSeleccionadoPrice) - 34.9) * -1
      ).toFixed(0);

      let cuentaCliente = `<div class="descripcion-plan-cuenta-cliente bg-DCECF4">
            <p class="e-tc--blue">Cuenta Cliente</p>
            <p class="e-tc--blue"></p>
            <p class="e-tc--blue">${parseFloat(dsctoPlanFamiliar).toFixed(
              2
            )}</p>
          </div>
          <div class="descripcion-plan-dscto-plan-familiar bg-white">
            <p></p>
            <p>Descuento</p>
            <p>${parseFloat(dsctoPlanFamiliar).toFixed(2)}</p>
          </div>`;
      let dsctoPrimerReciboHtml = `<div class="descripcion-plan-dscto-primer-recibo bg-white">
          <p></p>
          <p>Descuento Beneficio por Linea Adicional</p>
          <p>${dsctoPrimerRecibo}</p>
        </div>`;
      let dsctoPrimerRecibo2Html = `<div class="descripcion-plan-dscto-primer-recibo bg-white">
        <p></p>
        <p>Descuento de Prorrateo por Beneficio de Linea Adicional</p>
        <p>${(dsctoPlanFamiliar / (sumaLineas - 1)).toFixed(2)}</p>
      </div>`;
      let formularioDsctoExclusivo = `<div class="descripcion-dscto-exclusivo bg-white">
        <div style="border: 1px dashed black; border-radius: 5px; padding: 1rem;">
          <p style="text-align: center; margin: 0;">¿Descuento exclusivo?</p>

          <div style="display: flex; justify-content: space-between; margin-top: 1rem;">
              <label>Si <input type="radio" value="1" name="aplica_descuento_exclusivo" /></label>
              
              <label>No <input type="radio" value="0" name="aplica_descuento_exclusivo" /></label>
          </div>
          
          <select style="width: 100%; height: 30px !important; margin-top: 1rem; display: none;" name="tipo_descuento_exclusivo">
              <option selected value=""></option>
              <option value="20">20% X 3 MESES</option>
              <option value="30">30% X 3 MESES</option>
              <option value="30">30% X 6 MESES</option>
              <option value="50">50% X 6 MESES</option>
              <option value="50">50% X 12 MESES</option>
          </select>
        </div>
      </div>`;

      totalPagarPrimerRecibo += dsctoPlanFamiliar;

      for (let w = 0, l = parseInt(valNumnewlines.value); w < l; w++) {
        let totalLineaNueva = parseFloat(
          parseFloat(planHogarSeleccionadoPrice) +
            parseFloat(calcularProrrateo) +
            parseFloat(dsctoPrimerRecibo)
        ).toFixed(2);
        let TotalLineaNueva = (e) => {
          if (e == 0) {
            return parseFloat(
              parseFloat(planHogarSeleccionadoPrice) +
                parseFloat(calcularProrrateo)
            ).toFixed(2);
          } else {
            return parseFloat(
              parseFloat(planHogarSeleccionadoPrice) +
                parseFloat(calcularProrrateo) +
                parseFloat(dsctoPrimerRecibo)
            ).toFixed(2);
          }
        };

        totalPagarPrimerRecibo +=
          w == 0
            ? parseFloat(
                parseFloat(planHogarSeleccionadoPrice) +
                  parseFloat(calcularProrrateo)
              )
            : parseFloat(
                parseFloat(planHogarSeleccionadoPrice) +
                  parseFloat(calcularProrrateo) +
                  parseFloat(dsctoPrimerRecibo)
              );

        let lineasNuevasUnified = `<div id="new_line_description_item${w}" class="recibo_new_line_description_item" style="position: relative;">
              <div class="descripcion-plan descripcion-plan-precio bg-DCECF4">
                <p class="e-tc--blue">Línea Nueva ${alphabet[
                  alphabetCounter
                ].toUpperCase()}</p>
                <p class="e-tc--blue">${planHogarSeleccionado}</p>
                <p class="e-tc--blue">${
                  w == 0
                    ? parseFloat(
                        parseFloat(planHogarSeleccionadoPrice) +
                          parseFloat(calcularProrrateo)
                      ).toFixed(2)
                    : parseFloat(
                        parseFloat(planHogarSeleccionadoPrice) +
                          parseFloat(calcularProrrateo) +
                          parseFloat(dsctoPrimerRecibo)
                      ).toFixed(2)
                }</p>
              </div>
              <div class="descripcion-plan-plan bg-white">
                <p></p>
                <p>Plan</p>
                <p>${planHogarSeleccionadoPrice}</p>
              </div>
              <div class="descripcion-plan-prorrateo bg-white">
                <p></p>
                <p>Prorrateo</p>
                <p>${parseFloat(calcularProrrateo).toFixed(2)}</p>
              </div>
              <div class="descripcion-plan-cargo-prorrateo bg-white">
                <p></p>
                <p>Cargo Prorrateo ${planHogarSeleccionado}</p>
                <p>${parseFloat(calcularProrrateo).toFixed(2)}</p>
              </div>
              ${w != 0 ? dsctoPrimerReciboHtml + dsctoPrimerRecibo2Html : ""}
              ${formularioDsctoExclusivo}
            </div>`;
        containerReceiptGenerated.insertAdjacentHTML(
          "beforeend",
          lineasNuevasUnified
        );
        alphabetCounter++;
      }
      // cantidadLineasNuevas = 0;

      for (let w = 0, l = parseInt(valNumbaselines.value); w < l; w++) {
        let calcularCargoProrrateoBase = 0;
        if (parseFloat(getDiaCambio) < parseFloat(getFechaCiclo)) {
          calcularCargoProrrateoBase = parseFloat(
            (parseFloat(
              document.querySelectorAll(
                "select[name='plan-base'] option:checked"
              )[w].value
            ) /
              parseFloat(getDiasMesCambioAnterior)) *
              parseFloat(diferenciaDiaCambioFechaCiclo)
          ).toFixed(2);
        } else {
          calcularCargoProrrateoBase = parseFloat(
            (parseFloat(
              document.querySelectorAll(
                "select[name='plan-base'] option:checked"
              )[w].value
            ) /
              parseFloat(getDiasMesCambioActual)) *
              (parseFloat(getDiaCambio) - parseFloat(getFechaCiclo))
          ).toFixed(2);
        }
        let calcularDevolucionProrrateo = parseFloat(
          parseFloat(
            document.querySelectorAll(
              "select[name='plan-base'] option:checked"
            )[w].value
          ) * -1
        ).toFixed(1);
        let calcularProrrateoPlanFamiliar = parseFloat(
          parseFloat(calcularProrrateo) +
            parseFloat(calcularDevolucionProrrateo) +
            parseFloat(calcularCargoProrrateoBase)
        ).toFixed(2);
        let totalDsctMiPrimerRecibo = parseFloat(
          parseFloat(planHogarSeleccionadoPrice) +
            parseFloat(calcularProrrateoPlanFamiliar) +
            parseFloat(dsctoPrimerRecibo)
        ).toFixed(2);

        let dsctoPrimerReciboHtmlBase = (e) => {
          if (e != 0) {
            return dsctoPrimerReciboHtml + dsctoPrimerRecibo2Html;
          } else {
            return "";
          }
        };
        let TotalDsctMiPrimerRecibo = (e) => {
          if (e == 0) {
            return parseFloat(
              parseFloat(planHogarSeleccionadoPrice) +
                parseFloat(calcularProrrateoPlanFamiliar)
            ).toFixed(2);
          } else {
            return parseFloat(
              parseFloat(planHogarSeleccionadoPrice) +
                parseFloat(calcularProrrateoPlanFamiliar) +
                parseFloat(dsctoPrimerRecibo)
            ).toFixed(2);
          }
        };

        totalPagarPrimerRecibo +=
          valNumnewlines.value == 0
            ? parseFloat(TotalDsctMiPrimerRecibo(w))
            : parseFloat(totalDsctMiPrimerRecibo);
        // dsctoPrimerReciboHtmlBase = dsctoPrimerReciboHtml;

        let lineasBaseUnified = `<div id="new_line_description_item${w}" class="recibo_new_line_description_item" style="position: relative;">
              <div class="descripcion-plan descripcion-plan-precio bg-DCECF4">
                <p class="e-tc--blue">Línea Base ${alphabet[
                  alphabetCounter
                ].toUpperCase()}</p>
                <p class="e-tc--blue">${planHogarSeleccionado}</p>
                <p class="e-tc--blue">${
                  valNumnewlines.value == 0
                    ? TotalDsctMiPrimerRecibo(w)
                    : totalDsctMiPrimerRecibo
                }</p>
              </div>
              <div class="descripcion-plan-plan bg-white">
                <p></p>
                <p>Plan</p>
                <p>${planHogarSeleccionadoPrice}</p>
              </div>
              <div class="descripcion-plan-prorrateo bg-white">
                <p></p>
                <p>Prorrateo</p>
                <p>${calcularProrrateoPlanFamiliar}</p>
              </div>
              <div class="descripcion-plan-cargo-prorrateo bg-white">
                <p></p>
                <p>Cargo Prorrateo ${planHogarSeleccionado}</p>
                <p>${parseFloat(calcularProrrateo).toFixed(2)}</p>
              </div>
              <div class="descripcion-plan-devolucion-prorrateo-base bg-white">
                <p></p>
                <p>Devolución Prorrateo ${
                  document.querySelectorAll(
                    "select[name='plan-base'] option:checked"
                  )[w].text
                }</p>
                <p>${calcularDevolucionProrrateo}</p>
              </div>
              <div class="descripcion-plan-cargo-prorrateo-base bg-white">
                <p></p>
                <p>Cargo Prorrateo ${
                  document.querySelectorAll(
                    "select[name='plan-base'] option:checked"
                  )[w].text
                }</p>
                <p>${calcularCargoProrrateoBase}</p>
              </div>
              ${
                valNumnewlines.value == 0
                  ? dsctoPrimerReciboHtmlBase(w)
                  : dsctoPrimerReciboHtml + dsctoPrimerRecibo2Html
              }
              ${formularioDsctoExclusivo}
            </div>`;

        containerReceiptGenerated.insertAdjacentHTML(
          "beforeend",
          lineasBaseUnified
        );

        alphabetCounter++;
      }

      totalPagarSegundoRecibo =
        parseFloat(selectFamilyPlan.value) +
        34.9 *
          (parseFloat(valNumnewlines.value) +
            parseFloat(valNumbaselines.value) -
            1);

      const totalRecibo = `<div class="descripcion-total-recibo bg-DCECF4">
        <p style="color: #000; text-align: center; font-size: 1.2rem;">Total a pagar estimado en primer recibo: <b style="color: #000;">S/${parseFloat(
          totalPagarPrimerRecibo
        ).toFixed(2)}</b></p>
        <p style="color: #000; text-align: center; font-size: 1rem;">Desde segundo recibo: <b style="color: #000;">S/${parseFloat(
          totalPagarSegundoRecibo
        ).toFixed(2)}</b></p>
      </d>`;

      containerReceiptGenerated.insertAdjacentHTML("beforeend", cuentaCliente);

      containerReceiptGenerated.insertAdjacentHTML("beforeend", totalRecibo);

      cantidadLineasBase = 0;
      this.$form.reset();
      btnPdfConvert.addEventListener("click", (e) => {
        let element = document.getElementById("pdf-recibo");
        let opt = {
          margin: 0.3,
          filename: "Recibo-plan-familiar.pdf",
          enableLinks: false,
          html2canvas: { windowWidth: 100, backgroundColor: "#ffffff" },
          jsPDF: {
            orientation: "p",
            unit: "mm",
            format: "a4",
            putOnlyUsedFonts: true,
            floatPrecision: 16,
          },
        };
        html2pdf().set(opt).from(element).save();
      });
      this.$buttonReset.addEventListener("click", (e) => {
        this.$form.reset();
        containerReceiptGenerated.innerHTML = "";
        linesGenerated.innerHTML = "";
        containerReceipt.style.display = "none";
        btnGenerateRecibo.classList.remove("e-button--orange");
        btnGenerateRecibo.classList.add("e-button--disabled");
      });
    };
    linesGeneratedInputs.forEach(function (input) {
      input.addEventListener("keyup", (f) => {
        validationLineasInputs(f.target);
      });
    });

    inputsForm.forEach(function (input) {
      input.addEventListener("input", () => {
        validationInputsForm();
      });
    });
    selectForm.forEach(function (select) {
      select.addEventListener("change", () => {
        validationInputsForm();
      });
    });
    document.addEventListener("change", () => {
      validationInputsForm();
    });
    selectFamilyPlan.addEventListener("change", (event) => {
      const valor = selectFamilyPlan.options[selectFamilyPlan.selectedIndex].text;

      const es_nuevo = dataPlanesFamiliares.find(e => e.name === valor).es_nuevo;


      if(es_nuevo) {
        this.$button.removeEventListener("click", btnGenerateReceiptFunction);
        this.$button.addEventListener("click", btnGenerateReceiptFunctionNuevo);
      } else {
        this.$button.removeEventListener("click", btnGenerateReceiptFunctionNuevo);
        this.$button.addEventListener("click", btnGenerateReceiptFunction);
      }
    });
    document.addEventListener("change", (evento) => {
      const target = evento.target.closest("#plan-base0");

      if (target) {
        const valor = document.querySelector("#plan-base0").value;

        if (document.querySelector("#btn-mismo-plan")) {
          document.querySelector("#btn-mismo-plan").disabled = !valor ? true : false;
        }
      }
    });
    document.addEventListener("click", (evento) => {
      const target = evento.target.closest("#btn-mismo-plan");

      if(target) {
        const texto = document.querySelector("#plan-base0").options[document.querySelector("#plan-base0").selectedIndex].text;

        document.querySelectorAll("select[name=plan-base]").forEach((x) => {
          for(let i = 0; i < x.length; i++) {
            const trend = x[i];
            
            if (trend.innerHTML === texto) {
              trend.selected = true;
            }
          }
        });
      }
    });
    $("body").on("change", "[name=aplica_descuento_exclusivo]", (evento) => {
      const aplica_descuento_exclusivo = evento.currentTarget.value;

      $(evento.currentTarget).closest(".descripcion-dscto-exclusivo").find("[name=tipo_descuento_exclusivo]").val(null).trigger("change");

      if(aplica_descuento_exclusivo === "1") {
        $(evento.currentTarget).closest(".descripcion-dscto-exclusivo").find("[name=tipo_descuento_exclusivo]").css("display", "inline");
      } else {
        $(evento.currentTarget).closest(".descripcion-dscto-exclusivo").find("[name=tipo_descuento_exclusivo]").css("display", "none");
      }
    });

    $("body").on("change", "[name=tipo_descuento_exclusivo]", (evento) => {
      const tipo_descuento_exclusivo = evento.currentTarget.value;
      const tipo_descuento_exclusivo_texto = (evento.currentTarget.options[evento.currentTarget.selectedIndex].text || "").toLowerCase();

      if(!tipo_descuento_exclusivo) {
        $(evento.currentTarget).closest(".recibo_new_line_description_item").find(".detalle-dscto-exclusivo").remove()
        return false;
      }

      let html_dscto = `<div class="descripcion-plan-dscto-primer-recibo detalle-dscto-exclusivo bg-white">
        <p></p>
        <p>${tipo_descuento_exclusivo_texto} (aplicado)</p>
        <p>100.23</p>
      </div>`;
      let html_prorrateo_dscto = `<div class="descripcion-plan-dscto-primer-recibo detalle-dscto-exclusivo bg-white">
        <p></p>
        <p>Cargo Prorrateo del Dscto del ${tipo_descuento_exclusivo}%</p>
        <p>10.53</p>
      </div>`;

      $(evento.currentTarget).closest(".recibo_new_line_description_item").append(html_dscto);
      $(evento.currentTarget).closest(".recibo_new_line_description_item").append(html_prorrateo_dscto);
    });
  }

  init() {
    if (this.$form) this.load();
  }
}

new RecibosPlanesFamiliares().init();

let fecha_actual = new Date();
fecha_actual.setDate(fecha_actual.getDate() + 1);
fecha_actual = `${fecha_actual.getFullYear()}-${(fecha_actual.getMonth() + 1).toString().padStart(2, "0")}-${(fecha_actual.getDate()).toString().padStart(2, "0")}`;
document.getElementById("fecha-activacion").max = fecha_actual;