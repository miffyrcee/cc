
  var fontsInServiceWorker = sessionStorage.foutFontsStage1Loaded && sessionStorage.foutFontsStage2Loaded || ('serviceWorker' in navigator && navigator.serviceWorker.controller !== null && navigator.serviceWorker.controller.state === 'activated')
  if (!fontsInServiceWorker && 'fonts' in document) {
    function fetchFonts(fonts) {
      return Promise.all(fonts.map(function (font) {
        return document
          .fonts
          .load(font);
      }));
    }

    if (sessionStorage.foutFontsStage2Loaded) {
  		document.documentElement.className += " wf-loaded-stage2";
  	} else {
      sessionStorage.foutFontsStage1Loaded = true;
    };
  }

  if ("fonts" in document) {
    let sansLight = new FontFace(
      "Inter",
      "url('/fonts/inter-light.woff2') format('woff2')",
      { weight: "300" }
    );
    
    let sansRegular = new FontFace(
      "Inter",
      "url('/fonts/inter-regular.woff2') format('woff2')",
      { weight: "400" }
    );
    
    let sansMedium = new FontFace(
      "Inter",
      "url('/fonts/inter-medium.woff2') format('woff2')",
      { weight: "500" }
    );
    
    let sansSemibold = new FontFace(
      "Inter",
      "url('/fonts/inter-semibold.woff2') format('woff2')",
      { weight: "600" }
    );
    
    let sansBold = new FontFace(
      "Inter",
      "url('/fonts/inter-bold.woff2') format('woff2')",
      { weight: "700" }
    );

    let monoRegular = new FontFace(
      "Fira Code",
      "url('/fonts/fira-code-regular.woff2') format('woff2')",
      { weight: "400" }
    );

    let monoMedium = new FontFace(
      "Fira Code",
      "url('/fonts/fira-code-medium.woff2') format('woff2')",
      { weight: "500" }
    );
    
    let loadedFonts = Promise.all([
      sansLight.load(),
      sansRegular.load(),
      sansMedium.load(),
      sansSemibold.load(),
      sansBold.load(),
      monoRegular.load(),
      monoMedium.load()

    ]).then(result => {
      result.forEach(font => document.fonts.add(font));
      document.documentElement.classList.add('wf-loaded-stage2');
      sessionStorage.foutFontsStage2Loaded = true;
    }).catch(error => {
      throw new Error(`Error caught: ${error}`);
    });

  }

  if (
    (sessionStorage.foutFontsStage1Loaded &&
      sessionStorage.foutFontsStage2Loaded) ||
    ('serviceWorker' in navigator &&
      navigator.serviceWorker.controller !== null &&
      navigator.serviceWorker.controller.state === 'activated')
  ) {
    
    document.documentElement.classList.add('wf-loaded-stage2')
  }
