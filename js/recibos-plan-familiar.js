
let dataPlanesFamiliares = [
  { name: "Entel Power Familiar+ 39.90", price: "39.9" },
  { name: "Entel Power Familiar+ 49.90", price: "49.9" },
  { name: "Entel Power Familiar+ 55.90", price: "55.9" },
  { name: "Entel Power Familiar+ 59.90", price: "59.9" },
  { name: "Entel Power Familiar+ 74.90", price: "74.9" },
  { name: "Entel Power Familiar 89.90 SD", price: "89.9" },
  { name: "Entel Power Familiar 99.90 SD", price: "99.9" },
  { name: "Entel Power Familiar 109.90", price: "109.9" },
  { name: "Entel Power Familiar 129.90", price: "129.9" },
  { name: "Entel Power Familiar 159.90", price: "159.9" },
  { name: "Entel Power Familiar 179.90", price: "179.9" },
  { name: "Entel Power Familiar 199.90", price: "199.9" },
  { name: "Entel Power Familiar 259.90", price: "259.9" },
  { name: "Entel Power Familiar 299.90", price: "299.9" }
];
let dataMesCambio = [
  { name: "Enero", number: 1, canDias: 31 },
  { name: "Febrero", number: 2, canDias: 28 },
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
  { name: "Ciclo 1", fechaInicio: 1 },
  { name: "Ciclo 4", fechaInicio: 9 },
  { name: "Ciclo 3", fechaInicio: 16 },
  { name: "Ciclo 5", fechaInicio: 23 },
];


let dataPlanesBase = [
  { name: "Selecciona un plan base", price: "" },
  { name: "Entel Chip 20.90 REV", price: "20.9" },
  { name: "Entel Chip 25.90 REV", price: "25.9" },
  { name: "Entel Chip 30.90 REV", price: "30.9" },
  { name: "Entel Chip 43.50 REV", price: "43.5" },
  { name: "Postpago SIMple 30.90", price: "30.9" },
  { name: "Postpago SIMple 32.90 Plus", price: "32.9" },
  { name: "Postpago SIMple 43.50 Plus", price: "43.5" },
  { name: "Entel Total 19.90", price: "19.9" },
  { name: "Entel Chip 25.90", price: "25.9" },
  { name: "Entel Chip 32.90", price: "32.9" },
  { name: "Entel Chip 43.50 Plus", price: "43.5" },
  { name: "Entel Chip 45.90 Plus", price: "45.9" },
  { name: "Entel Chip 49.90 Plus", price: "49.9" },
  { name: "Entel Chip 55.90 Plus", price: "55.9" },
  { name: "Entel Chip 55.90 Plus B", price: "55.9" },
  { name: "Entel Chip 65.90 Plus", price: "65.9" },
  { name: "Entel Chip 74.90 Plus", price: "74.9" },
  { name: "Entel Chip 84.90", price: "84.9" },
  { name: "Entel Control 84.90", price: "84.9" },
  { name: "Entel Chip 89.90", price: "89.9" },
  { name: "Entel Chip 94.90", price: "94.9" },
  { name: "Entel Chip 94.80 Plus", price: "94.8" },
  { name: "Entel Chip 104.80 Plus", price: "104.8" },
  { name: "Entel Chip 109.90 Plus", price: "109.9" },
  { name: "Entel Chip 114.80", price: "114.8" },
  //{ name: "Retail Entel 129.90", price: "129.9" },
  //{ name: "Retail Entel 159.90", price: "159.9" },
  { name: "Entel Chip 129.90 Plus", price: "129.9" },
  { name: "Entel Chip 145.90", price: "145.9" },
  { name: "Entel Control 149.90", price: "149.9" },
  { name: "Entel Chip 155.90", price: "155.9" },
  { name: "Entel Chip 119.90", price: "119.9" },
  { name: "Entel Chip 159.90 Plus", price: "159.9" },
  { name: "Entel Power 94.90 B", price: "94.9" },
  { name: "Entel Power 109.90 B", price: "109.9" },
  { name: "Entel Power 129.90", price: "129.9" },
  { name: "Entel Chip 199.90", price: "199.9" },
  { name: "Entel Chip 199.90 Libre", price: "199.9" },
  { name: "Entel Power 74.90 B", price: "74.9" },
  { name: "Entel Chip 20.90 PLUS", price: "20.9" },
  { name: "Negocio Chip R 109.90", price: "109.9" },
  { name: "Negocio Chip R 84.80", price: "84.8" },
  { name: "Negocio Chip R 65.90", price: "65.9" },
  { name: "Negocio Chip R 41.90", price: "41.9" },
  { name: "Negocio Power R 156.40", price: "156.4" },
  { name: "Negocio Power R 65", price: "65" },
  { name: "Negocio Power D 65", price: "65" },
  { name: "Entel Chip 30.90", price: "30.9" },
  { name: "Entel Chip 30.90 B", price: "30.9" },
  { name: "Entel Chip 37.90 Plus", price: "37.9" },
  { name: "Entel Chip 48.90 Plus", price: "48.9" },
  { name: "Entel Power 59.90", price: "59.9" },
  { name: "Entel Power 74.90", price: "74.9" },
  { name: "Entel Power 94.90", price: "94.9" },
  { name: "Entel Power 109.90", price: "109.9" },
  { name: "Entel Chip+ 29.90", price: "29.9" },
  { name: "Entel Simple+ 29.90", price: "29.9" },
  { name: "Entel Chip+ 39.90", price: "39.9" },
  { name: "Entel Power+ 49.90", price: "49.9" },
  { name: "Entel Power+ 55.90", price: "55.9" },
  { name: "Entel Power+ 59.90", price: "59.9" },
  { name: "Entel Power+ 74.90", price: "74.9" },
  { name: "Entel Power 89.90 SD", price: "89.9" },
  { name: "Entel Power 99.90 SD", price: "99.9" }
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
    this.$selectChangeMonth = this.$form.querySelector("#mes-cambio");
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
    dataMesCambio.forEach((x) => {
      let op = new Option(x.name, x.number);
      op.setAttribute("dias", x.canDias);
      this.$selectChangeMonth.options.add(op);
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
    //$("#dia-cambio").mask("99");
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
    $("#dia-cambio").mask("Z#", {
      translation: {
        Z: {
          pattern: /[4-9]/
        },
      },
    });
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
    const diaCambioInput = document.querySelector("#dia-cambio");
    const selectFamilyPlan = document.querySelector("select#plan-familiar");
    const selectChangeMonth = document.querySelector("select#mes-cambio");
    const selectCustomerCycle = document.querySelector("select#ciclo-cliente");

    const btnGenerate = document.querySelector("a#btn-generar");
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
    diaCambioInput.required = true;
    selectFamilyPlan.required = true;
    selectChangeMonth.required = true;
    selectCustomerCycle.required = true;
    let validationIsNan = (e) => {
      return isNaN(parseInt(e.trim())) ? parseInt(0) : parseInt(e.trim());
    };
    let validationLineasInputs = (e) => {
      sumaLineas =
        validationIsNan(valNumnewlines.value) +
        validationIsNan(valNumbaselines.value);
      if (e.value) {
        if (
          valNumbaselines.value >= 1 &&
          valNumbaselines.value <= 5 &&
          sumaLineas >= 1 &&
          sumaLineas <= 5
        ) {
          // e.classList.remove("error");
          btnGenerate.classList.remove("btn-generar-disable");
          btnGenerate.classList.add("btn-generar-active");

          cantidadLineasBase = valNumbaselines.value;
          cantidadLineasNuevas = valNumnewlines.value;
        } else {
          // e.classList.add("error");
          btnGenerate.classList.remove("btn-generar-active");
          btnGenerate.classList.add("btn-generar-disable");
        }
      }
      if (btnGenerate.classList.contains("btn-generar-disable")) {
        // linesGenerated.remove();
        linesGenerated.innerHTML = "";
        cantidadLineasBase = 0;
      }
    };
    let generarLineas = (e) => {
      if (e.classList.contains("btn-generar-active")) {
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
          linesGenerated.appendChild(planBaseUnified);
          // linesGenerated.insertAdjacentHTML("beforeend", planBaseUnified);
        }

        e.classList.remove("btn-generar-active");
        e.classList.add("btn-generar-disable");
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
          diaCambioInput.value &&
          selectFamilyPlan.value &&
          selectChangeMonth.value &&
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
          diaCambioInput.value &&
          selectFamilyPlan.value &&
          selectChangeMonth.value &&
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
      let getDiasMesCambioActual =
        this.$selectChangeMonth[
          this.$selectChangeMonth.selectedIndex
        ].getAttribute("dias");

      let getDiasMesCambioAnterior;
      this.$selectChangeMonth[this.$selectChangeMonth.selectedIndex].value == 1
        ? (getDiasMesCambioAnterior = 31)
        : (getDiasMesCambioAnterior =
          this.$selectChangeMonth[
            this.$selectChangeMonth.selectedIndex
          ].previousElementSibling.getAttribute("dias"));

      let getFechaCiclo =
        this.$selectCustomerCycle[this.$selectCustomerCycle.selectedIndex]
          .value;
      let getDiaCambio = diaCambioInput.value;
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
            parseFloat(parseFloat(planHogarSeleccionadoPrice) - 29.9) /
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
            (parseFloat(planHogarSeleccionadoPrice) - 29.9)) /
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
        (parseFloat(planHogarSeleccionadoPrice) - 29.9) * -1
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
            <p>Descuento Plan Familiar</p>
            <p>${parseFloat(dsctoPlanFamiliar).toFixed(2)}</p>
          </div>`;
      let dsctoPrimerReciboHtml = `<div class="descripcion-plan-dscto-primer-recibo bg-white">
          <p></p>
          <p>Descuento Plan Familiar Mi Primer Recibo</p>
          <p>${dsctoPrimerRecibo}</p>
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

        totalPagarPrimerRecibo += w == 0 ? parseFloat(parseFloat(planHogarSeleccionadoPrice) + parseFloat(calcularProrrateo))
          : parseFloat(parseFloat(planHogarSeleccionadoPrice) + parseFloat(calcularProrrateo) + parseFloat(dsctoPrimerRecibo));

        let lineasNuevasUnified = `<div id="new_line_description_item${w}" class="recibo_new_line_description_item">
              <div class="descripcion-plan descripcion-plan-precio bg-DCECF4">
                <p class="e-tc--blue">Línea Nueva ${alphabet[
            alphabetCounter
          ].toUpperCase()}</p>
                <p class="e-tc--blue">${planHogarSeleccionado}</p>
                <p class="e-tc--blue">${w == 0
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
              ${w != 0 ? dsctoPrimerReciboHtml : ""}
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
            return dsctoPrimerReciboHtml;
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

        totalPagarPrimerRecibo += valNumnewlines.value == 0 ? parseFloat(TotalDsctMiPrimerRecibo(w)) : parseFloat(totalDsctMiPrimerRecibo);
        // dsctoPrimerReciboHtmlBase = dsctoPrimerReciboHtml;

        let lineasBaseUnified = `<div id="new_line_description_item${w}" class="recibo_new_line_description_item">
              <div class="descripcion-plan descripcion-plan-precio bg-DCECF4">
                <p class="e-tc--blue">Línea Base ${alphabet[
            alphabetCounter
          ].toUpperCase()}</p>
                <p class="e-tc--blue">${planHogarSeleccionado}</p>
                <p class="e-tc--blue">${valNumnewlines.value == 0
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
                <p>Devolución Prorrateo ${document.querySelectorAll(
            "select[name='plan-base'] option:checked"
          )[w].text
          }</p>
                <p>${calcularDevolucionProrrateo}</p>
              </div>
              <div class="descripcion-plan-cargo-prorrateo-base bg-white">
                <p></p>
                <p>Cargo Prorrateo ${document.querySelectorAll(
            "select[name='plan-base'] option:checked"
          )[w].text
          }</p>
                <p>${calcularCargoProrrateoBase}</p>
              </div>
              ${valNumnewlines.value == 0
            ? dsctoPrimerReciboHtmlBase(w)
            : dsctoPrimerReciboHtml
          }
            </div>`;

        containerReceiptGenerated.insertAdjacentHTML("beforeend", lineasBaseUnified);

        alphabetCounter++;
      }

      totalPagarSegundoRecibo = parseFloat(selectFamilyPlan.value) + (29.9 * ((parseFloat(valNumnewlines.value) + parseFloat(valNumbaselines.value)) - 1));

      const totalRecibo = `<div class="descripcion-total-recibo bg-DCECF4">
        <p style="color: #000; text-align: center; font-size: 1.2rem;">Total a pagar estimado en primer recibo: <b style="color: #000;">S/${parseFloat(totalPagarPrimerRecibo).toFixed(2)}</b></p>
        <p style="color: #000; text-align: center; font-size: 1rem;">Desde segundo recibo: <b style="color: #000;">S/${parseFloat(totalPagarSegundoRecibo).toFixed(2)}</b></p>
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
      input.addEventListener("input", (f) => {
        validationLineasInputs(f.target);
      });
    });
    btnGenerate.addEventListener("click", (f) => {
      generarLineas(f.target);
    });
    valNumbaselines.addEventListener("keyup", (f) => {
      if (f.currentTarget.value && [1, 2, 3, 4, 5].includes(Number(f.currentTarget.value))) {
        btnGenerate.click();
      }
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
    this.$button.addEventListener("click", btnGenerateReceiptFunction);
  }

  init() {
    if (this.$form) this.load();
  }
}

new RecibosPlanesFamiliares().init();