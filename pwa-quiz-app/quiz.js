const quizQuestions = [
    {
        question: "1. Podľa bunkovej teórie:",
        answers: [
            { text: "z hľadiska organizácie predstavujú bunky najjednoduchšie živé sústavy", isCorrect: false },
            { text: "všetky bunky pozostávajú z tých istých prvkov a molekúl", isCorrect: false },
            { text: "každá bunka vzniká len delením už existujúcej bunky", isCorrect: true },
            { text: "živé bunky sú zložené z rovnakej hmoty ako neživé objekty", isCorrect: false },
            { text: "základom každého organizmu rastlín a živočíchov je bunka", isCorrect: true },
            { text: "každá bunka pozostáva predovšetkým z anorganických makromolekúl", isCorrect: false },
            { text: "bunky sú štruktúrované, stupňovito usporiadané, otvorené nukleoproteínové sústavy", isCorrect: false },
            { text: "všetky bunky majú schopnosť uchovávať a replikovať genetickú informáciu", isCorrect: false }
        ]
    },
    {
        question: "2. Prvú ucelenú evolučnú teóriu živých organizmov sformuloval:",
        answers: [
            { text: "nemecký lekár G. Trevirana", isCorrect: false },
            { text: "Ch. Darwin", isCorrect: false },
            { text: "J. B. Lamarck", isCorrect: true },
            { text: "L. Pasteur", isCorrect: false },
            { text: "C. Linné", isCorrect: false },
            { text: "C. Woese", isCorrect: false },
            { text: "anglický prírodovedec W. Harvey", isCorrect: false },
            { text: "francúzsky prírodovedec J. B. Lamarck v roku 1809", isCorrect: true }
        ]
    },
    {
        question: "3. Ktoré tvrdenie je správne:",
        answers: [
            { text: "J. B. Lamarck je autorom binomickej nomenklatúry", isCorrect: false },
            { text: "L. Pasteur definitívne vyvrátil možnosť samoplodenia i tých najmenšich organizmov", isCorrect: true },
            { text: "M. J. Schleiden je zakladateľom modernej systematiky organizmov", isCorrect: false },
            { text: "T. Schwann patrí k autorom bunkovej teórie", isCorrect: true },
            { text: "C. Woese je autorom dvojmenného pomenovania organizmov", isCorrect: false },
            { text: "pre skúmanie biologických objektov použil mikroskop medzi prvými R. Hooke", isCorrect: true },
            { text: "J. G. Mendel objasnil, že molekuly DNA sú materiálnym nositeľom genetickej informácie", isCorrect: false },
            { text: "autorstvo pojmu biológia sa pripisuje A. Leeuwenhoekovi", isCorrect: false }
        ]
    },
    {
        question: "4. Bunkovú teóriu formulovali:",
        answers: [
            { text: "R. Hooke", isCorrect: false },
            { text: "A. Leewenhoek", isCorrect: false },
            { text: "M. J. Schleiden", isCorrect: true },
            { text: "L. Pasteur", isCorrect: false },
            { text: "J. E. Purkyne", isCorrect: true },
            { text: "T. Schwann", isCorrect: true },
            { text: "M. Malpighi", isCorrect: false },
            { text: "Ch. L. Treviranus", isCorrect: false }
        ]
    },
    {
        question: "5. Základy novodobej anatómie ľudského tela položil:",
        answers: [
            { text: "W. Harvey", isCorrect: false },
            { text: "Aristoteles", isCorrect: false },
            { text: "R. Hooke", isCorrect: false },
            { text: "J. E. Purkyňe", isCorrect: false },
            { text: "A. Vesalius", isCorrect: true },
            { text: "Galenos", isCorrect: false },
            { text: "R. Virchow", isCorrect: false },
            { text: "M. Malpighi", isCorrect: false }
        ]
    },
    {
        question: "6. Medzi fyziologické vedy patria:",
        answers: [
            { text: "fyziológia človeka", isCorrect: true },
            { text: "fyziológia prvkov", isCorrect: false },
            { text: "histológia", isCorrect: false },
            { text: "embryológia", isCorrect: false },
            { text: "vedy, ktoré študujú funkciu jednotlivých orgánov živých sústav", isCorrect: true },
            { text: "fyziológia živočíchov", isCorrect: true },
            { text: "vedy, ktoré študujú funkciu jednotlivých bunkových organel", isCorrect: false },
            { text: "fyziológia rastlín", isCorrect: true }
        ]
    },
    {
        question: "7. Parazitológia študuje:",
        answers: [
            { text: "správanie mikroorganizinov", isCorrect: false },
            { text: "cudzopasné organizmy", isCorrect: true },
            { text: "vzťahy živých sústav k prostrediu", isCorrect: false },
            { text: "cudzopasné mikroorganizmy", isCorrect: true },
            { text: "dedičnosť a premenlivosť mikroorganizmov", isCorrect: false },
            { text: "vzťahy medzi hostiteľom a parazitom", isCorrect: true },
            { text: "zárodočný vývoj mikroorganizmov", isCorrect: false },
            { text: "a definuje biologické zákonitosti vzťahov medzi parazitom a hostiteľom", isCorrect: true }
        ]
    },
    {
        question: "8. Dvojzávitnicovú štruktúru DNA a jej význam pre prenos genetickej informácie objasnili:",
        answers: [
            { text: "C. Woese", isCorrect: false },
            { text: "v roku 1944", isCorrect: false },
            { text: "v roku 1953", isCorrect: true },
            { text: "F. H. Crick", isCorrect: true },
            { text: "J. G. Mendel", isCorrect: false },
            { text: "v roku 1866", isCorrect: false },
            { text: "J. D. Watson", isCorrect: true },
            { text: "v roku 1966", isCorrect: false }
        ]
    },
    {
        question: "9. Voda v bunkách má funkciu:",
        answers: [
            { text: "zásobnú", isCorrect: false },
            { text: "konštrukčnú", isCorrect: false },
            { text: "ako zdroj energie", isCorrect: false },
            { text: "substrátovú — vytvára vhodné prostredie pre chemické deje", isCorrect: true },
            { text: "ako účinné rozpúšťadlo", isCorrect: true },
            { text: "regulačnú — reguluje príjem a výdaj látok bunkou", isCorrect: false },
            { text: "ako dôležitý faktor tepelného hospodárenia", isCorrect: true },
            { text: "ako základná stavebná jednotka makromolekulových látok", isCorrect: false }
        ]
    },
    {
        question: "10. Monomérom bielkovín sú:",
        answers: [
            { text: "nukleotidy", isCorrect: false },
            { text: "peptidy", isCorrect: false },
            { text: "aminoskupiny", isCorrect: false },
            { text: "atómy uhlíka a dusíka", isCorrect: false },
            { text: "aminokyseliny", isCorrect: true },
            { text: "dusíkaté organické bázy", isCorrect: false },
            { text: "monosacharidy", isCorrect: false },
            { text: "nukleozidy", isCorrect: false }
        ]
    },
    {
        question: "11. Jednotlivé aminokyseliny sú v bielkovinovom reťazci pospájané väzbou:",
        answers: [
            { text: "esterovou", isCorrect: false },
            { text: "fosfodiesterovou", isCorrect: false },
            { text: "glykozidovou", isCorrect: false },
            { text: "peptidovou", isCorrect: true },
            { text: "vodíkovými mostíkmi", isCorrect: false },
            { text: "peptidovou medzi dusíkatými bázami", isCorrect: false },
            { text: "kovalentnou", isCorrect: true },
            { text: "nekovalentnou", isCorrect: false }
        ]
    },
    {
        question: "12. Bielkoviny majú funkciu:",
        answers: [
            { text: "informačnú", isCorrect: true },
            { text: "ako najhospodárnejší zdroj energie", isCorrect: false },
            { text: "metabolickú — fibrilárne bielkoviny", isCorrect: false },
            { text: "metabolickú — globulárne bielkoviny", isCorrect: true },
            { text: "mechanickú — fibrilárne bielkoviny", isCorrect: true },
            { text: "mechanickú — globulárne bielkoviny", isCorrect: false },
            { text: "v živočíšnych bunkách hlavne zásobnú", isCorrect: false },
            { text: "štruktúrnu", isCorrect: true }
        ]
    },
    {
        question: "13. Monomérom nukleových kyselín sú:",
        answers: [
            { text: "aminokyseliny", isCorrect: false },
            { text: "adenín, guanín, tymín, cytozín", isCorrect: false },
            { text: "nukleotidy", isCorrect: true },
            { text: "chromatín", isCorrect: false },
            { text: "dusíkaté bázy", isCorrect: false },
            { text: "nukleozidy", isCorrect: false },
            { text: "ribonukleotidy alebo deoxyribonukleotidy", isCorrect: true },
            { text: "pentózy", isCorrect: false }
        ]
    },
    {
        question: "14. Z chemického hľadiska sú nukleové kyseliny:",
        answers: [
            { text: "polypeptidy", isCorrect: false },
            { text: "estery vyšších mastných kyselín a glycerolu", isCorrect: false },
            { text: "polynukleotidy", isCorrect: true },
            { text: "makromolekulové látky", isCorrect: true },
            { text: "biopolyméry", isCorrect: true },
            { text: "pentózy", isCorrect: false },
            { text: "monoméry", isCorrect: false },
            { text: "dlhé reťazce zložené z aminokyselín", isCorrect: false }
        ]
    },
    {
        question: "15. Lipidy:",
        answers: [
            { text: "môžu byť súčasťou vitamínov", isCorrect: true },
            { text: "sú súčasťou niektorych hormónov", isCorrect: true },
            { text: "katalyzujú chemické reakcie v bunke", isCorrect: false },
            { text: "sú hlavnou zložkou protilátok", isCorrect: false },
            { text: "sa podieľajú na regulačných procesoch v bunke", isCorrect: true },
            { text: "sú najhospodárnejším zdrojom energie", isCorrect: true },
            { text: "sú súčasťou biomembrán", isCorrect: true },
            { text: "majú ochrannú funkciu, napr. vosky", isCorrect: true }
        ]
    },
    {
        question: "16. Za najmenší systém schopný samostatného života sa považuje:",
        answers: [
            { text: "vírus", isCorrect: false },
            { text: "bunka", isCorrect: true },
            { text: "kolónia", isCorrect: false },
            { text: "biopolymér", isCorrect: false },
            { text: "mnohobunkový organizmus", isCorrect: false },
            { text: "populácia", isCorrect: false },
            { text: "nukleoproteínová častica", isCorrect: false },
            { text: "indivíduum vyššieho rádu", isCorrect: false }
        ]
    },
    {
        question: "17. Základom cytoplazmatickej membrány je:",
        answers: [
            { text: "bielkovinová dvojvrstva", isCorrect: false },
            { text: "celulózová dvojvrstva", isCorrect: false },
            { text: "dvojvrstva lipidov, do ktorej sú ponorené bielkoviny", isCorrect: true },
            { text: "cytosol", isCorrect: false },
            { text: "cytoplazmatická matrix", isCorrect: false },
            { text: "fosfolipidová dvojvrstva", isCorrect: true },
            { text: "plazmaléma", isCorrect: false },
            { text: "bielkovinová dvojvrstva, do ktorej sú ponorené fosfolipidy", isCorrect: false }
        ]
    },
    {
        question: "18. K základným bunkovým povrchom eukaryotickej bunky patrí:",
        answers: [
            { text: "plazmaléma", isCorrect: true },
            { text: "jadrová membrána", isCorrect: false },
            { text: "kutikula", isCorrect: false },
            { text: "pelikula", isCorrect: false },
            { text: "bunková stena", isCorrect: true },
            { text: "cytoplazmatická membrána", isCorrect: true },
            { text: "slizové puzdro", isCorrect: false },
            { text: "karyoléma", isCorrect: false }
        ]
    },
    {
        question: "19. Cytoplazmatická membrána:",
        answers: [
            { text: "je väčšinou jedinou biomembránou v prokaryotických bunkách", isCorrect: true },
            { text: "reguluje príjem látok do bunky", isCorrect: true },
            { text: "sa nazýva plazmaléma", isCorrect: true },
            { text: "sa nazýva karyoléma", isCorrect: false },
            { text: "patrí k bunkovým povrchom", isCorrect: true },
            { text: "obsahuje receptory na zachytávanie signálov", isCorrect: true },
            { text: "tvorí prostredie pre život a metabolickú aktivitu bunkových organel", isCorrect: false },
            { text: "zabezpečuje predovšetkým mechanickú ochranu bunky", isCorrect: false }
        ]
    },
    {
        question: "20. Vírusy sú:",
        answers: [
            { text: "extracelulárne parazity", isCorrect: false },
            { text: "schopné uchovávať genetickú informáciu", isCorrect: true },
            { text: "nebunkové organizmy", isCorrect: true },
            { text: "najjednoduchšie jednobunkové prokaryotické organizmy", isCorrect: false },
            { text: "z hľadiska organizácie najjednoduchšie živé sústavy", isCorrect: true },
            { text: "schopné autoreprodukcie", isCorrect: false },
            { text: "schopné trvalo existovať len ako parazity buniek", isCorrect: true },
            { text: "rozmnožovaním viazané len na živé bunky", isCorrect: true }
        ]
    },
    {
        question: "21. Podľa všeobecnej štruktúry rozlišujeme dva základné typy buniek:",
        answers: [
            { text: "rastlinné a živočišne", isCorrect: false },
            { text: "jadrové a bezjadrové", isCorrect: false },
            { text: "diferencované a nediferencované", isCorrect: false },
            { text: "prokaryotické a eukaryotické", isCorrect: true },
            { text: "mikroskopické a submikroskopické", isCorrect: false },
            { text: "jednoduché a zložené", isCorrect: false },
            { text: "membránové a nemembránové", isCorrect: false },
            { text: "telové a pohlavné", isCorrect: false }
        ]
    },
    {
        question: "22. Bunky určitého funkčného a štruktúrneho typu sa spájajú do:",
        answers: [
            { text: "orgánov — pri rastlinách", isCorrect: false },
            { text: "špecializovaných buniek", isCorrect: false },
            { text: "pletív — pri rastlinách", isCorrect: true },
            { text: "organizmov", isCorrect: false },
            { text: "indivíduí vyššieho rádu — pri živočíchoch", isCorrect: false },
            { text: "tkanív — pri živočíchoch", isCorrect: true },
            { text: "tkanivových kultúr — pri rastlinách", isCorrect: false },
            { text: "bunkových organel", isCorrect: false }
        ]
    },
    {
        question: "23. Pravé indivíduá vyššieho rádu:",
        answers: [
            { text: "sú spoločenstvá tzv. sociálneho hmyzu", isCorrect: true },
            { text: "sú napr. svorky vlkov", isCorrect: false },
            { text: "sú spoločenstvá jedincov, ktorí môžu existovať aj samostatne", isCorrect: false },
            { text: "sú obligátne spoločenstvá organizmov", isCorrect: true },
            { text: "majú jedincov trvalo anatomicky a funkčne diferencovaných", isCorrect: true },
            { text: "sú spoločenstvá organizmov, v ktorých je funkčná špecializácia jedincov zameniteľná", isCorrect: false },
            { text: "sú spoločenstvá organizmov, v ktorých je funkčná špecializácia jedincov nezameniteľná", isCorrect: true },
            { text: "majú jedincov prechodne anatomicky a funkčne diferencovaných", isCorrect: false }
        ]
    },
    {
        question: "24. Cytológia sa zaoberá štúdiom:",
        answers: [
            { text: "živých sústav na úrovni molekúl", isCorrect: false },
            { text: "mikroskopickej stavby živočíšnych tkanív", isCorrect: false },
            { text: "javov na úrovni bunky", isCorrect: true },
            { text: "živých mikroorganizmov", isCorrect: false },
            { text: "živých sústav na úrovni ich základnej štruktúrnej a funkčnej jednotky", isCorrect: true },
            { text: "vírusov", isCorrect: false },
            { text: "tvaru a štruktúry buniek a bunkových organel", isCorrect: true },
            { text: "makromolekulových látok", isCorrect: false }
        ]
    },
    {
        question: "25. Obsah vody v bunkách:",
        answers: [
            { text: "je v priemere 65%", isCorrect: true },
            { text: "sa počas života organizmu nemení", isCorrect: false },
            { text: "závisí od ich prostredia", isCorrect: true },
            { text: "závisí od orgánu, v ktorom sa nachádzajú", isCorrect: true },
            { text: "závisí od ich veku", isCorrect: true },
            { text: "ontogeneticky starších je väčší", isCorrect: false },
            { text: "ontogeneticky mladších je menší", isCorrect: false },
            { text: "je v priemere 10 — 40 % ich celkovej hmotnosti", isCorrect: false }
        ]
    },
    {
        question: "26. Prokaryotické bunky nemajú:",
        answers: [
            { text: "plastidy", isCorrect: true },
            { text: "mitochondrie", isCorrect: true },
            { text: "jadrovú membránu", isCorrect: true },
            { text: "ribozómy", isCorrect: false },
            { text: "cytoplazmatickú membránu", isCorrect: false },
            { text: "bunkovú stenu", isCorrect: false },
            { text: "jadro", isCorrect: true },
            { text: "DNA", isCorrect: false }
        ]
    },
    {
        question: "27. Prokaryotické bunky majú:",
        answers: [
            { text: "jadro", isCorrect: false },
            { text: "jadrovú membránu", isCorrect: false },
            { text: "nukleoid", isCorrect: true },
            { text: "DNA", isCorrect: true },
            { text: "ribozómy", isCorrect: true },
            { text: "cytoplazmatickú membránu", isCorrect: true },
            { text: "bunkovú stenu", isCorrect: true },
            { text: "mitochondrie", isCorrect: false }
        ]
    },
    {
        question: "28. Eukaryotické bunky majú:",
        answers: [
            { text: "jadro", isCorrect: true },
            { text: "jadrovú membránu", isCorrect: true },
            { text: "nukleoid", isCorrect: false },
            { text: "DNA", isCorrect: true },
            { text: "ribozómy", isCorrect: true },
            { text: "cytoplazmatickú membránu", isCorrect: true },
            { text: "bunkovú stenu", isCorrect: false },
            { text: "mitochondrie", isCorrect: true }
        ]
    },
    {
        question: "29. Eukaryotické bunky nemajú:",
        answers: [
            { text: "jadro", isCorrect: false },
            { text: "jadrovú membránu", isCorrect: false },
            { text: "nukleoid", isCorrect: true },
            { text: "DNA", isCorrect: false },
            { text: "ribozómy", isCorrect: false },
            { text: "cytoplazmatickú membránu", isCorrect: false },
            { text: "bunkovú stenu — živočíšne bunky", isCorrect: true },
            { text: "mitochondrie", isCorrect: false }
        ]
    },
    {
        question: "30. Rastlinné bunky majú:",
        answers: [
            { text: "jadro", isCorrect: true },
            { text: "jadrovú membránu", isCorrect: true },
            { text: "nukleoid", isCorrect: false },
            { text: "DNA", isCorrect: true },
            { text: "ribozómy", isCorrect: true },
            { text: "cytoplazmatickú membránu", isCorrect: true },
            { text: "bunkovú stenu", isCorrect: true },
            { text: "plastidy", isCorrect: true }
        ]
    },
    {
        question: "31. Živočíšne bunky majú:",
        answers: [
            { text: "jadro", isCorrect: true },
            { text: "jadrovú membránu", isCorrect: true },
            { text: "nukleoid", isCorrect: false },
            { text: "DNA", isCorrect: true },
            { text: "ribozómy", isCorrect: true },
            { text: "cytoplazmatickú membránu", isCorrect: true },
            { text: "bunkovú stenu", isCorrect: false },
            { text: "plastidy", isCorrect: false }
        ]
    },
    {
        question: "32. Živočíšne bunky nemajú:",
        answers: [
            { text: "jadro", isCorrect: false },
            { text: "jadrovú membránu", isCorrect: false },
            { text: "nukleoid", isCorrect: true },
            { text: "DNA", isCorrect: false },
            { text: "ribozómy", isCorrect: false },
            { text: "cytoplazmatickú membránu", isCorrect: false },
            { text: "bunkovú stenu", isCorrect: true },
            { text: "plastidy", isCorrect: true }
        ]
    },
    {
        question: "33. Rastlinné bunky nemajú:",
        answers: [
            { text: "jadro", isCorrect: false },
            { text: "jadrovú membránu", isCorrect: false },
            { text: "nukleoid", isCorrect: true },
            { text: "DNA", isCorrect: false },
            { text: "ribozómy", isCorrect: false },
            { text: "cytoplazmatickú membránu", isCorrect: false },
            { text: "bunkovú stenu", isCorrect: false },
            { text: "centrioly", isCorrect: true }
        ]
    },
    {
        question: "34. Bunková stena:",
        answers: [
            { text: "je súčasťou všetkých buniek", isCorrect: false },
            { text: "je súčasťou rastlinných buniek", isCorrect: true },
            { text: "je súčasťou živočíšnych buniek", isCorrect: false },
            { text: "je súčasťou prokaryotických buniek", isCorrect: true },
            { text: "je súčasťou hubových buniek", isCorrect: true },
            { text: "je súčasťou buniek rias", isCorrect: true },
            { text: "je súčasťou buniek siníc", isCorrect: true },
            { text: "je súčasťou buniek baktérií", isCorrect: true }
        ]
    },
    {
        question: "35. Bunková stena rastlinných buniek:",
        answers: [
            { text: "je tvorená celulózou", isCorrect: true },
            { text: "je tvorená chitínom", isCorrect: false },
            { text: "je tvorená mureínom", isCorrect: false },
            { text: "je tvorená pektínom", isCorrect: true },
            { text: "je tvorená hemicelulózou", isCorrect: true },
            { text: "je tvorená lignínom", isCorrect: true },
            { text: "je tvorená peptidoglykánom", isCorrect: false },
            { text: "je tvorená glykoproteínmi", isCorrect: false }
        ]
    },
    {
        question: "36. Bunková stena hubových buniek:",
        answers: [
            { text: "je tvorená celulózou", isCorrect: false },
            { text: "je tvorená chitínom", isCorrect: true },
            { text: "je tvorená mureínom", isCorrect: false },
            { text: "je tvorená pektínom", isCorrect: false },
            { text: "je tvorená hemicelulózou", isCorrect: false },
            { text: "je tvorená lignínom", isCorrect: false },
            { text: "je tvorená peptidoglykánom", isCorrect: false },
            { text: "je tvorená glykoproteínmi", isCorrect: true }
        ]
    },
    {
        question: "37. Bunková stena prokaryotických buniek:",
        answers: [
            { text: "je tvorená celulózou", isCorrect: false },
            { text: "je tvorená chitínom", isCorrect: false },
            { text: "je tvorená mureínom", isCorrect: true },
            { text: "je tvorená pektínom", isCorrect: false },
            { text: "je tvorená hemicelulózou", isCorrect: false },
            { text: "je tvorená lignínom", isCorrect: false },
            { text: "je tvorená peptidoglykánom", isCorrect: true },
            { text: "je tvorená glykoproteínmi", isCorrect: false }
        ]
    },
    {
        question: "38. Bunková stena:",
        answers: [
            { text: "zabezpečuje mechanickú ochranu bunky", isCorrect: true },
            { text: "zabezpečuje tvar bunky", isCorrect: true },
            { text: "zabezpečuje selektívny príjem látok do bunky", isCorrect: false },
            { text: "zabezpečuje výdaj látok z bunky", isCorrect: false },
            { text: "zabezpečuje osmotickú rovnováhu bunky", isCorrect: false },
            { text: "zabezpečuje komunikáciu bunky s prostredím", isCorrect: false },
            { text: "zabezpečuje ochranu bunky pred plazmolýzou", isCorrect: true },
            { text: "zabezpečuje ochranu bunky pred plazmoptýzou", isCorrect: false }
        ]
    },
    {
        question: "39. Cytoplazmatická membrána:",
        answers: [
            { text: "zabezpečuje mechanickú ochranu bunky", isCorrect: false },
            { text: "zabezpečuje tvar bunky", isCorrect: false },
            { text: "zabezpečuje selektívny príjem látok do bunky", isCorrect: true },
            { text: "zabezpečuje výdaj látok z bunky", isCorrect: true },
            { text: "zabezpečuje osmotickú rovnováhu bunky", isCorrect: true },
            { text: "zabezpečuje komunikáciu bunky s prostredím", isCorrect: true },
            { text: "zabezpečuje ochranu bunky pred plazmolýzou", isCorrect: false },
            { text: "zabezpečuje ochranu bunky pred plazmoptýzou", isCorrect: false }
        ]
    },
    {
        question: "40. Cytoplazma:",
        answers: [
            { text: "je vnútorný obsah bunky", isCorrect: true },
            { text: "je vnútorný obsah bunky bez jadra", isCorrect: true },
            { text: "je vnútorný obsah bunky bez jadra a bunkových organel", isCorrect: false },
            { text: "je vnútorný obsah bunky bez jadra, bunkových organel a cytoskeletu", isCorrect: false },
            { text: "je vnútorný obsah bunky bez jadra, bunkových organel, cytoskeletu a cytosolu", isCorrect: false },
            { text: "je vnútorný obsah bunky bez jadra, bunkových organel, cytoskeletu, cytosolu a inklúzií", isCorrect: false },
            { text: "je vnútorný obsah bunky bez jadra, bunkových organel, cytoskeletu, cytosolu, inklúzií a vakuol", isCorrect: false },
            { text: "je vnútorný obsah bunky bez jadra, bunkových organel, cytoskeletu, cytosolu, inklúzií, vakuol a zásobných látok", isCorrect: false }
        ]
    },
    {
        question: "41. Cytosol:",
        answers: [
            { text: "je vnútorný obsah bunky", isCorrect: false },
            { text: "je vnútorný obsah bunky bez jadra", isCorrect: false },
            { text: "je vnútorný obsah bunky bez jadra a bunkových organel", isCorrect: true },
            { text: "je vnútorný obsah bunky bez jadra, bunkových organel a cytoskeletu", isCorrect: false },
            { text: "je vnútorný obsah bunky bez jadra, bunkových organel, cytoskeletu a inklúzií", isCorrect: false },
            { text: "je vnútorný obsah bunky bez jadra, bunkových organel, cytoskeletu, inklúzií a vakuol", isCorrect: false },
            { text: "je vnútorný obsah bunky bez jadra, bunkových organel, cytoskeletu, inklúzií, vakuol a zásobných látok", isCorrect: false },
            { text: "je tekutá zložka cytoplazmy", isCorrect: true }
        ]
    },
    {
        question: "42. Hyaloplazma:",
        answers: [
            { text: "je vnútorný obsah bunky", isCorrect: false },
            { text: "je vnútorný obsah bunky bez jadra", isCorrect: false },
            { text: "je vnútorný obsah bunky bez jadra a bunkových organel", isCorrect: false },
            { text: "je vnútorný obsah bunky bez jadra, bunkových organel a cytoskeletu", isCorrect: false },
            { text: "je vnútorný obsah bunky bez jadra, bunkových organel, cytoskeletu a inklúzií", isCorrect: false },
            { text: "je vnútorný obsah bunky bez jadra, bunkových organel, cytoskeletu, inklúzií a vakuol", isCorrect: false },
            { text: "je vnútorný obsah bunky bez jadra, bunkových organel, cytoskeletu, inklúzií, vakuol a zásobných látok", isCorrect: false },
            { text: "je tekutá zložka cytoplazmy", isCorrect: true }
        ]
    },
    {
        question: "43. Cytoskelet:",
        answers: [
            { text: "je súčasťou cytoplazmy", isCorrect: true },
            { text: "je súčasťou jadra", isCorrect: false },
            { text: "je súčasťou bunkových organel", isCorrect: false },
            { text: "je súčasťou cytosolu", isCorrect: false },
            { text: "je súčasťou hyaloplazmy", isCorrect: false },
            { text: "je súčasťou bunkových povrchov", isCorrect: false },
            { text: "je súčasťou bunkovej steny", isCorrect: false },
            { text: "je súčasťou cytoplazmatickej membrány", isCorrect: false }
        ]
    },
    {
        question: "44. Cytoskelet:",
        answers: [
            { text: "je tvorený mikrofilamentami", isCorrect: true },
            { text: "je tvorený intermediárnymi filamentami", isCorrect: true },
            { text: "je tvorený mikrotubulmi", isCorrect: true },
            { text: "je tvorený aktínom", isCorrect: true },
            { text: "je tvorený myozínom", isCorrect: true },
            { text: "je tvorený tubulínom", isCorrect: true },
            { text: "je tvorený keratínom", isCorrect: true },
            { text: "je tvorený chromatínom", isCorrect: false }
        ]
    },
    {
        question: "45. Cytoskelet:",
        answers: [
            { text: "zabezpečuje tvar bunky", isCorrect: true },
            { text: "zabezpečuje pohyb bunky", isCorrect: true },
            { text: "zabezpečuje pohyb bunkových organel", isCorrect: true },
            { text: "zabezpečuje pohyb cytoplazmy", isCorrect: true },
            { text: "zabezpečuje pohyb jadra", isCorrect: true },
            { text: "zabezpečuje pohyb bunkovej steny", isCorrect: false },
            { text: "zabezpečuje pohyb cytoplazmatickej membrány", isCorrect: false },
            { text: "zabezpečuje pohyb bunkových povrchov", isCorrect: false }
        ]
    },
    {
        question: "46. Mikrofilamenty:",
        answers: [
            { text: "sú tvorené aktínom", isCorrect: true },
            { text: "sú tvorené myozínom", isCorrect: true },
            { text: "sú tvorené tubulínom", isCorrect: false },
            { text: "sú tvorené keratínom", isCorrect: false },
            { text: "sú tvorené chromatínom", isCorrect: false },
            { text: "sú tvorené DNA", isCorrect: false },
            { text: "sú tvorené RNA", isCorrect: false },
            { text: "sú tvorené bielkovinami", isCorrect: true }
        ]
    },
    {
        question: "47. Mikrotubuly:",
        answers: [
            { text: "sú tvorené aktínom", isCorrect: false },
            { text: "sú tvorené myozínom", isCorrect: false },
            { text: "sú tvorené tubulínom", isCorrect: true },
            { text: "sú tvorené keratínom", isCorrect: false },
            { text: "sú tvorené chromatínom", isCorrect: false },
            { text: "sú tvorené DNA", isCorrect: false },
            { text: "sú tvorené RNA", isCorrect: false },
            { text: "sú tvorené bielkovinami", isCorrect: true }
        ]
    },
    {
        question: "48. Intermediárne filamenty:",
        answers: [
            { text: "sú tvorené aktínom", isCorrect: false },
            { text: "sú tvorené myozínom", isCorrect: false },
            { text: "sú tvorené tubulínom", isCorrect: false },
            { text: "sú tvorené keratínom", isCorrect: true },
            { text: "sú tvorené chromatínom", isCorrect: false },
            { text: "sú tvorené DNA", isCorrect: false },
            { text: "sú tvorené RNA", isCorrect: false },
            { text: "sú tvorené bielkovinami", isCorrect: true }
        ]
    },
    {
        question: "49. Jadro:",
        answers: [
            { text: "je súčasťou cytoplazmy", isCorrect: false },
            { text: "je súčasťou eukaryotických buniek", isCorrect: true },
            { text: "je súčasťou prokaryotických buniek", isCorrect: false },
            { text: "je súčasťou cytosolu", isCorrect: false },
            { text: "je súčasťou hyaloplazmy", isCorrect: false },
            { text: "je súčasťou bunkových povrchov", isCorrect: false },
            { text: "je súčasťou bunkovej steny", isCorrect: false },
            { text: "je súčasťou cytoplazmatickej membrány", isCorrect: false }
        ]
    },
    {
        question: "50. Jadro:",
        answers: [
            { text: "je tvorené jadrovou membránou", isCorrect: true },
            { text: "je tvorené jadrovým obalom", isCorrect: true },
            { text: "je tvorené karyolémou", isCorrect: true },
            { text: "je tvorené karyoplazmou", isCorrect: true },
            { text: "je tvorené nukleolémou", isCorrect: false },
            { text: "je tvorené nukleoidom", isCorrect: false },
            { text: "je tvorené jadierkom", isCorrect: true },
            { text: "je tvorené chromatínom", isCorrect: true }
        ]
    },
    {
        question: "51. Jadrová membrána:",
        answers: [
            { text: "je tvorená jednou membránou", isCorrect: false },
            { text: "je tvorená dvoma membránami", isCorrect: true },
            { text: "je tvorená tromi membránami", isCorrect: false },
            { text: "je tvorená štyrmi membránami", isCorrect: false },
            { text: "je tvorená piatimi membránami", isCorrect: false },
            { text: "je tvorená šiestimi membránami", isCorrect: false },
            { text: "je tvorená siedmimi membránami", isCorrect: false },
            { text: "je tvorená ôsmimi membránami", isCorrect: false }
        ]
    },
    {
        question: "52. Jadrová membrána:",
        answers: [
            { text: "má jadrové póry", isCorrect: true },
            { text: "má jadrové kanáliky", isCorrect: false },
            { text: "má jadrové otvory", isCorrect: false },
            { text: "má jadrové diery", isCorrect: false },
            { text: "má jadrové štrbiny", isCorrect: false },
            { text: "má jadrové medzery", isCorrect: false },
            { text: "má jadrové priechody", isCorrect: false },
            { text: "má jadrové komplexy", isCorrect: true }
        ]
    },
    {
        question: "53. Jadierko:",
        answers: [
            { text: "je súčasťou jadra", isCorrect: true },
            { text: "je súčasťou cytoplazmy", isCorrect: false },
            { text: "je súčasťou prokaryotických buniek", isCorrect: false },
            { text: "je súčasťou cytosolu", isCorrect: false },
            { text: "je súčasťou hyaloplazmy", isCorrect: false },
            { text: "je súčasťou bunkových povrchov", isCorrect: false },
            { text: "je súčasťou bunkovej steny", isCorrect: false },
            { text: "je súčasťou cytoplazmatickej membrány", isCorrect: false }
        ]
    },
    {
        question: "54. Jadierko:",
        answers: [
            { text: "je miestom syntézy ribozómov", isCorrect: true },
            { text: "je miestom syntézy DNA", isCorrect: false },
            { text: "je miestom syntézy RNA", isCorrect: true },
            { text: "je miestom syntézy bielkovín", isCorrect: false },
            { text: "je miestom syntézy lipidov", isCorrect: false },
            { text: "je miestom syntézy sacharidov", isCorrect: false },
            { text: "je miestom syntézy nukleových kyselín", isCorrect: false },
            { text: "je miestom syntézy aminokyselín", isCorrect: false }
        ]
    },
    {
        question: "55. Chromatín:",
        answers: [
            { text: "je súčasťou jadra", isCorrect: true },
            { text: "je súčasťou cytoplazmy", isCorrect: false },
            { text: "je súčasťou prokaryotických buniek", isCorrect: false },
            { text: "je súčasťou cytosolu", isCorrect: false },
            { text: "je súčasťou hyaloplazmy", isCorrect: false },
            { text: "je súčasťou bunkových povrchov", isCorrect: false },
            { text: "je súčasťou bunkovej steny", isCorrect: false },
            { text: "je súčasťou cytoplazmatickej membrány", isCorrect: false }
        ]
    },
    {
        question: "56. Chromatín:",
        answers: [
            { text: "je tvorený DNA", isCorrect: true },
            { text: "je tvorený RNA", isCorrect: false },
            { text: "je tvorený bielkovinami", isCorrect: true },
            { text: "je tvorený lipidmi", isCorrect: false },
            { text: "je tvorený sacharidmi", isCorrect: false },
            { text: "je tvorený nukleovými kyselinami", isCorrect: false },
            { text: "je tvorený aminokyselinami", isCorrect: false },
            { text: "je tvorený histónmi", isCorrect: true }
        ]
    },
    {
        question: "57. Chromozómy:",
        answers: [
            { text: "sú súčasťou jadra", isCorrect: true },
            { text: "sú súčasťou cytoplazmy", isCorrect: false },
            { text: "sú súčasťou prokaryotických buniek", isCorrect: false },
            { text: "sú súčasťou cytosolu", isCorrect: false },
            { text: "sú súčasťou hyaloplazmy", isCorrect: false },
            { text: "sú súčasťou bunkových povrchov", isCorrect: false },
            { text: "sú súčasťou bunkovej steny", isCorrect: false },
            { text: "sú súčasťou cytoplazmatickej membrány", isCorrect: false }
        ]
    },
    {
        question: "58. Chromozómy:",
        answers: [
            { text: "sú tvorené DNA", isCorrect: true },
            { text: "sú tvorené RNA", isCorrect: false },
            { text: "sú tvorené bielkovinami", isCorrect: true },
            { text: "sú tvorené lipidmi", isCorrect: false },
            { text: "sú tvorené sacharidmi", isCorrect: false },
            { text: "sú tvorené nukleovými kyselinami", isCorrect: false },
            { text: "sú tvorené aminokyselinami", isCorrect: false },
            { text: "sú tvorené histónmi", isCorrect: true }
        ]
    },
    {
        question: "59. Chromozómy:",
        answers: [
            { text: "sú nositeľmi genetickej informácie", isCorrect: true },
            { text: "sú nositeľmi dedičných vlastností", isCorrect: true },
            { text: "sú nositeľmi dedičných znakov", isCorrect: true },
            { text: "sú nositeľmi dedičných chorôb", isCorrect: true },
            { text: "sú nositeľmi dedičných porúch", isCorrect: true },
            { text: "sú nositeľmi dedičných anomálií", isCorrect: true },
            { text: "sú nositeľmi dedičných mutácií", isCorrect: true },
            { text: "sú nositeľmi dedičných génov", isCorrect: true }
        ]
    },
    {
        question: "60. Chromozómy:",
        answers: [
            { text: "sú tvorené chromatídami", isCorrect: true },
            { text: "sú tvorené centromérami", isCorrect: true },
            { text: "sú tvorené telomérami", isCorrect: true },
            { text: "sú tvorené satelitmi", isCorrect: true },
            { text: "sú tvorené sekundárnymi zúženiami", isCorrect: true },
            { text: "sú tvorené primárnymi zúženiami", isCorrect: true },
            { text: "sú tvorené ramienkami", isCorrect: true },
            { text: "sú tvorené chromatínom", isCorrect: true }
        ]
    },
    {
        question: "61. Mitochondrie:",
        answers: [
            { text: "sú súčasťou cytoplazmy", isCorrect: true },
            { text: "sú súčasťou jadra", isCorrect: false },
            { text: "sú súčasťou prokaryotických buniek", isCorrect: false },
            { text: "sú súčasťou eukaryotických buniek", isCorrect: true },
            { text: "sú súčasťou rastlinných buniek", isCorrect: true },
            { text: "sú súčasťou živočíšnych buniek", isCorrect: true },
            { text: "sú súčasťou hubových buniek", isCorrect: true },
            { text: "sú súčasťou buniek rias", isCorrect: true }
        ]
    },
    {
        question: "62. Mitochondrie:",
        answers: [
            { text: "sú tvorené vonkajšou membránou", isCorrect: true },
            { text: "sú tvorené vnútornou membránou", isCorrect: true },
            { text: "sú tvorené matrix", isCorrect: true },
            { text: "sú tvorené kristami", isCorrect: true },
            { text: "sú tvorené ribozómami", isCorrect: true },
            { text: "sú tvorené DNA", isCorrect: true },
            { text: "sú tvorené RNA", isCorrect: true },
            { text: "sú tvorené bielkovinami", isCorrect: true }
        ]
    },
    {
        question: "63. Mitochondrie:",
        answers: [
            { text: "sú miestom bunkového dýchania", isCorrect: true },
            { text: "sú miestom syntézy ATP", isCorrect: true },
            { text: "sú miestom syntézy bielkovín", isCorrect: true },
            { text: "sú miestom syntézy lipidov", isCorrect: false },
            { text: "sú miestom syntézy sacharidov", isCorrect: false },
            { text: "sú miestom syntézy nukleových kyselín", isCorrect: false },
            { text: "sú miestom syntézy aminokyselín", isCorrect: false },
            { text: "sú miestom syntézy mastných kyselín", isCorrect: false }
        ]
    },
    {
        question: "64. Plastidy:",
        answers: [
            { text: "sú súčasťou cytoplazmy", isCorrect: true },
            { text: "sú súčasťou jadra", isCorrect: false },
            { text: "sú súčasťou prokaryotických buniek", isCorrect: false },
            { text: "sú súčasťou eukaryotických buniek", isCorrect: true },
            { text: "sú súčasťou rastlinných buniek", isCorrect: true },
            { text: "sú súčasťou živočíšnych buniek", isCorrect: false },
            { text: "sú súčasťou hubových buniek", isCorrect: false },
            { text: "sú súčasťou buniek rias", isCorrect: true }
        ]
    },
    {
        question: "65. Redukčné delenie:",
        answers: [
            { text: "je priame bunkové delenie", isCorrect: false },
            { text: "je meiotické delenie", isCorrect: true },
            { text: "je špecializovaný spôsob delenia, výsledkom ktorého je vznik pohlavných buniek", isCorrect: true },
            { text: "je špecializovaný spôsob delenia, výsledkom ktorého je vznik diploidných gamét", isCorrect: false },
            { text: "je v prípade živočíchov jediný možný spôsob vzniku pohlavných buniek", isCorrect: true },
            { text: "nezaručuje rovnomerné rozdelenie genetického materiálu do dcérskych buniek", isCorrect: false },
            { text: "prebieha v dvoch po sebe nasledujúcich deleniach s odlišným priebehom", isCorrect: true },
            { text: "prebieha v dvoch po sebe nasledujúcich deleniach s rovnakým priebehom", isCorrect: false }
        ]
    },
    {
        question: "66. Homeotypické delenie:",
        answers: [
            { text: "je prvé meiotické delenie", isCorrect: false },
            { text: "je druhé meiotické delenie", isCorrect: true },
            { text: "má profázu I, metafázu I, anafázu I, telofázu I", isCorrect: false },
            { text: "má profázu II, metafázu II, anafázu II, telofázu II", isCorrect: true },
            { text: "je charakteristické zložitejším priebehom profázy, v ktorej dochádza ku crossing-overu", isCorrect: false },
            { text: "nasleduje po krátkej interfáze, kedy dochádza k replikácii DNA", isCorrect: false },
            { text: "nasleduje po krátkej interfáze, kedy nedochádza k replikácii DNA", isCorrect: true },
            { text: "redukuje počet chromozómov", isCorrect: false }
        ]
    },
    {
        question: "67. Proces postupného tvarového a funkčného odlíšenia buniek sa nazýva:",
        answers: [
            { text: "stimulácia", isCorrect: false },
            { text: "totipotencia a uskutočňuje sa už počas zárodočného vývinu", isCorrect: false },
            { text: "diferenciácia", isCorrect: true },
            { text: "špecializácia", isCorrect: true },
            { text: "reprodukcia", isCorrect: false },
            { text: "autoregulácia", isCorrect: false },
            { text: "autoreprodukcia a výsledkom sú špecializované bunky podľa tvaru a funkcie", isCorrect: false },
            { text: "diferenciácia a výsledkom sú špecializované bunky podFa tvaru a funkcie", isCorrect: true }
        ]
    },
    {
        question: "68. Bunkový cyklus:",
        answers: [
            { text: "sa označuje ako regeneračná doba bunky", isCorrect: false },
            { text: "je naprogramovaný geneticky", isCorrect: true },
            { text: "sa pri nedostatku živín v prostredí zastaví v S — fáze", isCorrect: false },
            { text: "je kontrolovaný mechanizmami pôsobiacimi hlavne v G_1 — fáze", isCorrect: true },
            { text: "môže byť narušený niektorými vírusmi", isCorrect: true },
            { text: "zahŕňa prípravné fázy G_1 - postmitotickú a G_2 - predmitotickú", isCorrect: true },
            { text: "prokaryotických buniek má G_1, S, G_2 a M — fázu", isCorrect: false },
            { text: "zahŕňa prípravne fázy G_l- predmitotickú a G_2 - postmitotickú", isCorrect: false }
        ]
    },
    {
        question: "69. Poradie fáz bunkového cyklu je nasledujúce:",
        answers: [
            { text: "karyokinéza a cytokinéza", isCorrect: false },
            { text: "profáza, metafáza, anafáza, telofáza", isCorrect: false },
            { text: "heterotypické a homeotypické delenie", isCorrect: false },
            { text: "G_1, S, G_2, M", isCorrect: true },
            { text: "predmitotická fáza, S - fáza, postmitotická fáza, M- fáza", isCorrect: false },
            { text: "amitóza, mitóza, meióza", isCorrect: false },
            { text: "interfáza a M - fáza", isCorrect: true },
            { text: "postmitotická fáza, S — fáza, predmitotická fázá, M - fáza", isCorrect: true }
        ]
    },
    {
        question: "70. Generačná doba bunky:",
        answers: [
            { text: "je daná geneticky", isCorrect: true },
            { text: "je pre rozličné bunky rovnaká", isCorrect: false },
            { text: "je časové trvanie bunkového cyklu", isCorrect: true },
            { text: "je pre rozličné bunky rozdielna", isCorrect: true },
            { text: "nezávisí od množstva živín v prostredí", isCorrect: false },
            { text: "je časové trvanie interfázy", isCorrect: false },
            { text: "je časové trvanie regenerácie bunky", isCorrect: false },
            { text: "je ovplyvnená množstvom vhodných živín v prostredí", isCorrect: true }
        ]
    },
    {
        question: "71. Interfáza:",
        answers: [
            { text: "je obdobie, keď sa bunka nedelí", isCorrect: true },
            { text: "zahŕňa mitózu", isCorrect: false },
            { text: "sa označuje ako bunkový cyklus", isCorrect: false },
            { text: "sa označuje ako generačná doba bunky", isCorrect: false },
            { text: "zahŕňa profázu, metafázu, anafázu, telofázu", isCorrect: false },
            { text: "zahŕňa postmitotickú fázu, S — fázu a predmitotickú fázu", isCorrect: true },
            { text: "zahŕňa hlavný kontrolný uzol celého bunkového cyklu", isCorrect: true },
            { text: "je rastová fáza bunkového cyklu", isCorrect: true }
        ]
    },
    {
        question: "72. Pri nedostatku živín v prostredí sa generačná doba bunky:",
        answers: [
            { text: "nemení", isCorrect: false },
            { text: "zrýchľuje", isCorrect: false },
            { text: "predlžuje", isCorrect: true },
            { text: "zrýchľuje za vzniku nádorových buniek", isCorrect: false },
            { text: "skráti, pretože sa zastavuje priebeh G_1 fázy", isCorrect: false },
            { text: "nemení, pretože sa zastavuje priebeh bunkového cyklu", isCorrect: false },
            { text: "predlžuje, pretože sa zastavuje nielen priebeh G_1 — fázy, ale aj celého bunkového cyklu", isCorrect: true },
            { text: "zrýchľuje, pretože bunka urýchlene prechádza do M - fázy", isCorrect: false }
        ]
    },
    {
        question: "73. G_1 — fáza bunkového cyklu:",
        answers: [
            { text: "sa označuje ako predmitotická", isCorrect: false },
            { text: "sa označuje ako postmitotická", isCorrect: true },
            { text: "začína v okamihu vzniku dcérskej bunky", isCorrect: true },
            { text: "začína v okamihu zániku dcérskej bunky", isCorrect: false },
            { text: "je začiatkom vlastného bunkového cyklu dcérskej bunky", isCorrect: true },
            { text: "je charakterizovaná rastovými procesmi", isCorrect: true },
            { text: "z hľadiska časového trvania je najkratšia", isCorrect: false },
            { text: "z hľadiska časového trvania je najvariabilnejšia", isCorrect: true }
        ]
    },
    {
        question: "74. V G_1 — fáze:",
        answers: [
            { text: "prebieha syntéza bielkovín", isCorrect: true },
            { text: "sa nachádza hlavný kontrolný uzol bunkového cyklu", isCorrect: true },
            { text: "prebieha zdvojenie jadrových chromozómov", isCorrect: false },
            { text: "sa bunka pripravuje na rozdelenie jadra", isCorrect: false },
            { text: "sa nachádza kontrolný uzol karyokinézy", isCorrect: false },
            { text: "sa nachádza kontrolný uzol cytokinézy", isCorrect: false },
            { text: "dochádza k zmnoženiu bunkových štruktúr", isCorrect: true },
            { text: "neprebieha zdvojenie jadrových chromozómov", isCorrect: true }
        ]
    },
    {
        question: "75. Sesterské chromatidy:",
        answers: [
            { text: "vznikajú replikáciou DNA v S-fáze", isCorrect: true },
            { text: "sú homologické", isCorrect: false },
            { text: "sú spojené centromérou", isCorrect: true },
            { text: "sa rozchádzajú v anafáze mitózy", isCorrect: true },
            { text: "sa rozchádzajú v anafáze I. meiotického delenia", isCorrect: false },
            { text: "sa rozchádzajú v anafáze II. meiotického delenia", isCorrect: true },
            { text: "sa rozchádzajú v anafáze heterotypického delenia", isCorrect: false },
            { text: "sú geneticky identické", isCorrect: true }
        ]
    },
    {
        question: "76. Označte nesprávnu odpoveď:",
        answers: [
            { text: "v priebehu profázy sa chromozómy skracujú a hrubnú", isCorrect: false },
            { text: "v metafáze sa chromozómy zoraďujú do centrálnej roviny a priečne sa rozdeľujú v centromére", isCorrect: true },
            { text: "v S — fáze bunkového cyklu prebieha syntéza DNA", isCorrect: false },
            { text: "v profáze sa centrozóm rozdelí a obidva nové sa presunú oproti sebe v centre jadra", isCorrect: true },
            { text: "v priebehu telofázy zanikajú vlákna deliaceho vretienka", isCorrect: false },
            { text: "na začiatku anafázy sa v blízkosti každého centrozómu sústredí diploidný počet chromozómov", isCorrect: true },
            { text: "G_1— fáza sa nazýva hlavný kontrolný uzol bunkového cyklu", isCorrect: true },
            { text: "v profáze I sa chromatidy homologických chromozómov prekrížia a vymenia si navzájom genetický materiál", isCorrect: false }
        ]
    },
    {
        question: "77. Bielkoviny, ktoré sa syntetizujú v G_1 — fáze sa využívajú najmä:",
        answers: [
            { text: "na tvorbu mitotického aparátu", isCorrect: false },
            { text: "na tvorbu bunkových organel", isCorrect: true },
            { text: "na tvorbu jednochromatidových chromozómov", isCorrect: false },
            { text: "na rastové procesy v bunke", isCorrect: true },
            { text: "na znásobenie bunkových štruktúr", isCorrect: true },
            { text: "na tvorbu zásobných štruktúr", isCorrect: false },
            { text: "na tvorbu deliaceho vretienka", isCorrect: false },
            { text: "na tvorbu plazmatickej platničky", isCorrect: false }
        ]
    },
    {
        question: "78. Kľúčovým procesom S — fázy je:",
        answers: [
            { text: "syntéza DNA", isCorrect: true },
            { text: "zdvojenie jednochromatidových chromozómov", isCorrect: true },
            { text: "rozdelenie jadrových chromozómov", isCorrect: false },
            { text: "regenerácia jadra", isCorrect: false },
            { text: "zdvojenie bunkových organel", isCorrect: false },
            { text: "zdvojenie dvojchromatidových chromozómov", isCorrect: false },
            { text: "znásobenie genetického materiálu bunky", isCorrect: true },
            { text: "zdvojenie počtu homologických chromozómov", isCorrect: false }
        ]
    },
    {
        question: "79. Karyokinéza a cytokinéza prebiehajú:",
        answers: [
            { text: "v interfáze bunkového cyklu", isCorrect: false },
            { text: "v M — fáze bunkového cyklu", isCorrect: true },
            { text: "v telofáze mitózy", isCorrect: true },
            { text: "v G_2 - fáze bunkového cyklu", isCorrect: false },
            { text: "v telofáze II", isCorrect: true },
            { text: "v metafáze bunkového cyklu", isCorrect: false },
            { text: "v postmitotickej fáze", isCorrect: false },
            { text: "v telofáze I", isCorrect: true }
        ]
    },
    {
        question: "80. Do interfázy bunkového cyklu patrí:",
        answers: [
            { text: "G_2 - fáza", isCorrect: true },
            { text: "G_1 — fáza", isCorrect: true },
            { text: "M — fáza", isCorrect: false },
            { text: "meióza", isCorrect: false },
            { text: "mitóza", isCorrect: false },
            { text: "predmitotická G_1 - fáza", isCorrect: false },
            { text: "S — fáza", isCorrect: true },
            { text: "postmitotická G_2 - fáza", isCorrect: false }
        ]
    },
    {
        question: "81. Mitóza:",
        answers: [
            { text: "je nepriame delenie bunky", isCorrect: true },
            { text: "je priame delenie bunky", isCorrect: false },
            { text: "je delenie jadra", isCorrect: true },
            { text: "je delenie cytoplazmy", isCorrect: false },
            { text: "je delenie bunky", isCorrect: true },
            { text: "je delenie bunkových organel", isCorrect: false },
            { text: "je delenie bunkových povrchov", isCorrect: false },
            { text: "je delenie bunkových štruktúr", isCorrect: false }
        ]
    },
    {
        question: "82. Mitóza:",
        answers: [
            { text: "má profázu, metafázu, anafázu, telofázu", isCorrect: true },
            { text: "má profázu I, metafázu I, anafázu I, telofázu I", isCorrect: false },
            { text: "má profázu II, metafázu II, anafázu II, telofázu II", isCorrect: false },
            { text: "má heterotypické a homeotypické delenie", isCorrect: false },
            { text: "má karyokinézu a cytokinézu", isCorrect: true },
            { text: "má karyokinézu", isCorrect: true },
            { text: "má cytokinézu", isCorrect: true },
            { text: "má amitózu", isCorrect: false }
        ]
    },
    {
        question: "83. Mitóza:",
        answers: [
            { text: "je delenie somatických buniek", isCorrect: true },
            { text: "je delenie pohlavných buniek", isCorrect: false },
            { text: "je delenie telových buniek", isCorrect: true },
            { text: "je delenie gamét", isCorrect: false },
            { text: "je delenie diploidných buniek", isCorrect: true },
            { text: "je delenie haploidných buniek", isCorrect: false },
            { text: "je delenie buniek s 2n počtom chromozómov", isCorrect: true },
            { text: "je delenie buniek s n počtom chromozómov", isCorrect: false }
        ]
    },
    {
        question: "84. Mitóza:",
        answers: [
            { text: "zabezpečuje rovnomerné rozdelenie genetického materiálu do dcérskych buniek", isCorrect: true },
            { text: "zabezpečuje nerovnomerné rozdelenie genetického materiálu do dcérskych buniek", isCorrect: false },
            { text: "zabezpečuje vznik dcérskych buniek s rovnakým počtom chromozómov ako materská bunka", isCorrect: true },
            { text: "zabezpečuje vznik dcérskych buniek s polovičným počtom chromozómov ako materská bunka", isCorrect: false },
            { text: "zabezpečuje vznik dcérskych buniek s rovnakým genetickým materiálom ako materská bunka", isCorrect: true },
            { text: "zabezpečuje vznik dcérskych buniek s odlišným genetickým materiálom ako materská bunka", isCorrect: false },
            { text: "zabezpečuje vznik dcérskych buniek s rovnakým počtom génov ako materská bunka", isCorrect: true },
            { text: "zabezpečuje vznik dcérskych buniek s polovičným počtom génov ako materská bunka", isCorrect: false }
        ]
    },
    {
        question: "85. Meióza:",
        answers: [
            { text: "je nepriame delenie bunky", isCorrect: true },
            { text: "je priame delenie bunky", isCorrect: false },
            { text: "je delenie jadra", isCorrect: true },
            { text: "je delenie cytoplazmy", isCorrect: false },
            { text: "je delenie bunky", isCorrect: true },
            { text: "je delenie bunkových organel", isCorrect: false },
            { text: "je delenie bunkových povrchov", isCorrect: false },
            { text: "je delenie bunkových štruktúr", isCorrect: false }
        ]
    },
    {
        question: "86. Meióza:",
        answers: [
            { text: "má profázu, metafázu, anafázu, telofázu", isCorrect: false },
            { text: "má profázu I, metafázu I, anafázu I, telofázu I", isCorrect: true },
            { text: "má profázu II, metafázu II, anafázu II, telofázu II", isCorrect: true },
            { text: "má heterotypické a homeotypické delenie", isCorrect: true },
            { text: "má karyokinézu a cytokinézu", isCorrect: true },
            { text: "má karyokinézu", isCorrect: true },
            { text: "má cytokinézu", isCorrect: true },
            { text: "má amitózu", isCorrect: false }
        ]
    },
    {
        question: "87. Meióza:",
        answers: [
            { text: "je delenie somatických buniek", isCorrect: false },
            { text: "je delenie pohlavných buniek", isCorrect: true },
            { text: "je delenie telových buniek", isCorrect: false },
            { text: "je delenie gamét", isCorrect: false },
            { text: "je delenie diploidných buniek", isCorrect: true },
            { text: "je delenie haploidných buniek", isCorrect: false },
            { text: "je delenie buniek s 2n počtom chromozómov", isCorrect: true },
            { text: "je delenie buniek s n počtom chromozómov", isCorrect: false }
        ]
    },
    {
        question: "88. Meióza:",
        answers: [
            { text: "zabezpečuje rovnomerné rozdelenie genetického materiálu do dcérskych buniek", isCorrect: true },
            { text: "zabezpečuje nerovnomerné rozdelenie genetického materiálu do dcérskych buniek", isCorrect: false },
            { text: "zabezpečuje vznik dcérskych buniek s rovnakým počtom chromozómov ako materská bunka", isCorrect: false },
            { text: "zabezpečuje vznik dcérskych buniek s polovičným počtom chromozómov ako materská bunka", isCorrect: true },
            { text: "zabezpečuje vznik dcérskych buniek s rovnakým genetickým materiálom ako materská bunka", isCorrect: false },
            { text: "zabezpečuje vznik dcérskych buniek s odlišným genetickým materiálom ako materská bunka", isCorrect: true },
            { text: "zabezpečuje vznik dcérskych buniek s rovnakým počtom génov ako materská bunka", isCorrect: false },
            { text: "zabezpečuje vznik dcérskych buniek s polovičným počtom génov ako materská bunka", isCorrect: true }
        ]
    },
    {
        question: "89. Amitóza:",
        answers: [
            { text: "je nepriame delenie bunky", isCorrect: false },
            { text: "je priame delenie bunky", isCorrect: true },
            { text: "je delenie jadra", isCorrect: true },
            { text: "je delenie cytoplazmy", isCorrect: true },
            { text: "je delenie bunky", isCorrect: true },
            { text: "je delenie bunkových organel", isCorrect: false },
            { text: "je delenie bunkových povrchov", isCorrect: false },
            { text: "je delenie bunkových štruktúr", isCorrect: false }
        ]
    },
    {
        question: "90. Amitóza:",
        answers: [
            { text: "má profázu, metafázu, anafázu, telofázu", isCorrect: false },
            { text: "má profázu I, metafázu I, anafázu I, telofázu I", isCorrect: false },
            { text: "má profázu II, metafázu II, anafázu II, telofázu II", isCorrect: false },
            { text: "má heterotypické a homeotypické delenie", isCorrect: false },
            { text: "má karyokinézu a cytokinézu", isCorrect: false },
            { text: "má karyokinézu", isCorrect: false },
            { text: "má cytokinézu", isCorrect: false },
            { text: "nemá žiadne fázy", isCorrect: true }
        ]
    },
    {
        question: "91. Amitóza:",
        answers: [
            { text: "je delenie somatických buniek", isCorrect: true },
            { text: "je delenie pohlavných buniek", isCorrect: false },
            { text: "je delenie telových buniek", isCorrect: true },
            { text: "je delenie gamét", isCorrect: false },
            { text: "je delenie diploidných buniek", isCorrect: true },
            { text: "je delenie haploidných buniek", isCorrect: false },
            { text: "je delenie buniek s 2n počtom chromozómov", isCorrect: true },
            { text: "je delenie buniek s n počtom chromozómov", isCorrect: false }
        ]
    },
    {
        question: "92. Amitóza:",
        answers: [
            { text: "zabezpečuje rovnomerné rozdelenie genetického materiálu do dcérskych buniek", isCorrect: false },
            { text: "zabezpečuje nerovnomerné rozdelenie genetického materiálu do dcérskych buniek", isCorrect: true },
            { text: "zabezpečuje vznik dcérskych buniek s rovnakým počtom chromozómov ako materská bunka", isCorrect: false },
            { text: "zabezpečuje vznik dcérskych buniek s polovičným počtom chromozómov ako materská bunka", isCorrect: false },
            { text: "zabezpečuje vznik dcérskych buniek s rovnakým genetickým materiálom ako materská bunka", isCorrect: false },
            { text: "zabezpečuje vznik dcérskych buniek s odlišným genetickým materiálom ako materská bunka", isCorrect: true },
            { text: "zabezpečuje vznik dcérskych buniek s rovnakým počtom génov ako materská bunka", isCorrect: false },
            { text: "zabezpečuje vznik dcérskych buniek s polovičným počtom génov ako materská bunka", isCorrect: false }
        ]
    },
    {
        question: "93. Crossing-over:",
        answers: [
            { text: "je výmena genetického materiálu medzi homologickými chromozómami", isCorrect: true },
            { text: "je výmena genetického materiálu medzi nehomologickými chromozómami", isCorrect: false },
            { text: "je výmena genetického materiálu medzi chromatídami", isCorrect: true },
            { text: "je výmena genetického materiálu medzi jadrom a cytoplazmou", isCorrect: false },
            { text: "je výmena genetického materiálu medzi bunkami", isCorrect: false },
            { text: "je výmena genetického materiálu medzi bunkovými organelami", isCorrect: false },
            { text: "je výmena genetického materiálu medzi bunkovými povrchmi", isCorrect: false },
            { text: "je výmena genetického materiálu medzi bunkovými štruktúrami", isCorrect: false }
        ]
    },
    {
        question: "94. Crossing-over:",
        answers: [
            { text: "prebieha v profáze mitózy", isCorrect: false },
            { text: "prebieha v profáze I meiózy", isCorrect: true },
            { text: "prebieha v profáze II meiózy", isCorrect: false },
            { text: "prebieha v metafáze mitózy", isCorrect: false },
            { text: "prebieha v metafáze I meiózy", isCorrect: false },
            { text: "prebieha v metafáze II meiózy", isCorrect: false },
            { text: "prebieha v anafáze mitózy", isCorrect: false },
            { text: "prebieha v anafáze I meiózy", isCorrect: false }
        ]
    },
    {
        question: "95. Crossing-over:",
        answers: [
            { text: "zabezpečuje genetickú variabilitu", isCorrect: true },
            { text: "zabezpečuje genetickú stabilitu", isCorrect: false },
            { text: "zabezpečuje genetickú uniformitu", isCorrect: false },
            { text: "zabezpečuje genetickú identitu", isCorrect: false },
            { text: "zabezpečuje genetickú diverzitu", isCorrect: true },
            { text: "zabezpečuje genetickú homogenitu", isCorrect: false },
            { text: "zabezpečuje genetickú heterogenitu", isCorrect: true },
            { text: "zabezpečuje genetickú homozygotnosť", isCorrect: false }
        ]
    },
    {
        question: "96. Crossing-over:",
        answers: [
            { text: "je výmena genetického materiálu medzi homologickými chromozómami", isCorrect: true },
            { text: "je výmena genetického materiálu medzi nehomologickými chromozómami", isCorrect: false },
            { text: "je výmena genetického materiálu medzi chromatídami", isCorrect: true },
            { text: "je výmena genetického materiálu medzi jadrom a cytoplazmou", isCorrect: false },
            { text: "je výmena genetického materiálu medzi bunkami", isCorrect: false },
            { text: "je výmena genetického materiálu medzi bunkovými organelami", isCorrect: false },
            { text: "je výmena genetického materiálu medzi bunkovými povrchmi", isCorrect: false },
            { text: "je výmena genetického materiálu medzi bunkovými štruktúrami", isCorrect: false }
        ]
    },
    {
        question: "97. Crossing-over:",
        answers: [
            { text: "prebieha v profáze mitózy", isCorrect: false },
            { text: "prebieha v profáze I meiózy", isCorrect: true },
            { text: "prebieha v profáze II meiózy", isCorrect: false },
            { text: "prebieha v metafáze mitózy", isCorrect: false },
            { text: "prebieha v metafáze I meiózy", isCorrect: false },
            { text: "prebieha v metafáze II meiózy", isCorrect: false },
            { text: "prebieha v anafáze mitózy", isCorrect: false },
            { text: "prebieha v anafáze I meiózy", isCorrect: false }
        ]
    },
    {
        question: "98. Crossing-over:",
        answers: [
            { text: "zabezpečuje genetickú variabilitu", isCorrect: true },
            { text: "zabezpečuje genetickú stabilitu", isCorrect: false },
            { text: "zabezpečuje genetickú uniformitu", isCorrect: false },
            { text: "zabezpečuje genetickú identitu", isCorrect: false },
            { text: "zabezpečuje genetickú diverzitu", isCorrect: true },
            { text: "zabezpečuje genetickú homogenitu", isCorrect: false },
            { text: "zabezpečuje genetickú heterogenitu", isCorrect: true },
            { text: "zabezpečuje genetickú homozygotnosť", isCorrect: false }
        ]
    },
    {
        question: "99. Crossing-over:",
        answers: [
            { text: "je výmena genetického materiálu medzi homologickými chromozómami", isCorrect: true },
            { text: "je výmena genetického materiálu medzi nehomologickými chromozómami", isCorrect: false },
            { text: "je výmena genetického materiálu medzi chromatídami", isCorrect: true },
            { text: "je výmena genetického materiálu medzi jadrom a cytoplazmou", isCorrect: false },
            { text: "je výmena genetického materiálu medzi bunkami", isCorrect: false },
            { text: "je výmena genetického materiálu medzi bunkovými organelami", isCorrect: false },
            { text: "je výmena genetického materiálu medzi bunkovými povrchmi", isCorrect: false },
            { text: "je výmena genetického materiálu medzi bunkovými štruktúrami", isCorrect: false }
        ]
    },
    {
        question: "100. Crossing-over:",
        answers: [
            { text: "prebieha v profáze mitózy", isCorrect: false },
            { text: "prebieha v profáze I meiózy", isCorrect: true },
            { text: "prebieha v profáze II meiózy", isCorrect: false },
            { text: "prebieha v metafáze mitózy", isCorrect: false },
            { text: "prebieha v metafáze I meiózy", isCorrect: false },
            { text: "prebieha v metafáze II meiózy", isCorrect: false },
            { text: "prebieha v anafáze mitózy", isCorrect: false },
            { text: "prebieha v anafáze I meiózy", isCorrect: false }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1');
    if (!h1.textContent.includes('v 1.00')) {
        h1.innerHTML = 'PWA Quiz App <span class="version">v 1.00</span>';
    }
    
    const quizContainer = document.getElementById('quiz-container');
    const questionDisplay = document.getElementById('question-display');
    const answersContainer = document.getElementById('answers-container');
    const evaluateBtn = document.getElementById('evaluate-btn');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    
    let currentQuestion = null;
    let selectedAnswers = [];
    
    const showRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * quizQuestions.length);
        currentQuestion = quizQuestions[randomIndex];
        
        questionDisplay.textContent = currentQuestion.question;
        
        answersContainer.innerHTML = '';
        selectedAnswers = [];
        
        let answerIndices = Array.from({ length: 8 }, (_, i) => i);
        
        for (let i = answerIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answerIndices[i], answerIndices[j]] = [answerIndices[j], answerIndices[i]];
        }
        
        const selectedIndices = answerIndices.slice(0, 4);
        
        selectedIndices.sort((a, b) => a - b);
        
        const displayOrder = [...selectedIndices];
        for (let i = displayOrder.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [displayOrder[i], displayOrder[j]] = [displayOrder[j], displayOrder[i]];
        }
        
        displayOrder.forEach((originalIndex) => {
            const answer = currentQuestion.answers[originalIndex];
            
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `answer-${originalIndex}`;
            checkbox.dataset.index = originalIndex;
            
            const label = document.createElement('label');
            label.htmlFor = `answer-${originalIndex}`;
            label.textContent = answer.text;
            
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    selectedAnswers.push(originalIndex);
                } else {
                    selectedAnswers = selectedAnswers.filter(i => i !== originalIndex);
                }
            });
            
            answerDiv.appendChild(checkbox);
            answerDiv.appendChild(label);
            answersContainer.appendChild(answerDiv);
        });
        
        evaluateBtn.style.display = 'block';
        nextQuestionBtn.style.display = 'none';
        
        const previousAnswers = document.querySelectorAll('.answer-item');
        previousAnswers.forEach(item => {
            item.classList.remove('correct-selected', 'incorrect-selected', 'correct-not-selected');
        });
    };
    
    showRandomQuestion();
    
    evaluateBtn.addEventListener('click', () => {
        if (!currentQuestion) return;
        
        const answerItems = document.querySelectorAll('.answer-item');
        
        const displayedIndices = Array.from(answerItems).map(item => {
            const checkbox = item.querySelector('input[type="checkbox"]');
            return parseInt(checkbox.dataset.index);
        });
        
        displayedIndices.forEach((index, i) => {
            const answer = currentQuestion.answers[index];
            const answerDiv = answerItems[i];
            const checkbox = answerDiv.querySelector('input[type="checkbox"]');
            const isSelected = selectedAnswers.includes(index);
            
            if (isSelected && answer.isCorrect) {
                answerDiv.classList.add('correct-selected');
            } else if (isSelected && !answer.isCorrect) {
                answerDiv.classList.add('incorrect-selected');
            } else if (!isSelected && answer.isCorrect) {
                answerDiv.classList.add('correct-not-selected');
            }
            
            checkbox.disabled = true;
        });
        
        evaluateBtn.style.display = 'none';
        nextQuestionBtn.style.display = 'block';
    });
    
    nextQuestionBtn.addEventListener('click', showRandomQuestion);
});
