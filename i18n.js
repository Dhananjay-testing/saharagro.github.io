(function () {
    const translations = {
        "Home": "मुख्यपृष्ठ", "Products": "उत्पादने", "NPK Soluble Fertilizers": "पाण्यात विरघळणारी NPK खते",
        "Micronutrients & Chelates": "सूक्ष्म अन्नद्रव्ये आणि चिलेट्स", "Biostimulants & Boosters": "जैवउत्तेजक आणि वाढवर्धक",
        "Liquid Range": "द्रवरूप उत्पादने", "Crop Protection Range": "पीक संरक्षण उत्पादने", "About Us": "आमच्याबद्दल",
        "Dealer Network": "विक्रेता नेटवर्क", "Transforming Agriculture.": "शेतीत परिवर्तन.", "Empowering Farmers.": "शेतकऱ्यांचे सक्षमीकरण.",
        "Explore Our Premium Agro-solutions built specifically to maximize crop yields across standard landscapes.": "विविध पिकांमध्ये उत्पादन वाढवण्यासाठी तयार केलेली आमची दर्जेदार कृषी उत्पादने जाणून घ्या.",
        "Get Consultation": "सल्ला घ्या", "About Sahara Agro": "सहारा अ‍ॅग्रोबद्दल",
        "At Sahara Agro Chemicals & Fertilizers, we are committed to helping farmers achieve their full potential. Our mission is to provide innovative, high-quality products and solutions that enhance crop yields, improve soil health, and promote sustainable agriculture practices. Your partner in agricultural success.": "सहारा अ‍ॅग्रो केमिकल्स अँड फर्टिलायझर्स येथे शेतकऱ्यांना प्रगतीसाठी मदत करण्यासाठी आम्ही कटिबद्ध आहोत. पीक उत्पादन वाढवणारी, जमिनीचे आरोग्य सुधारणारी आणि शाश्वत शेतीला प्रोत्साहन देणारी दर्जेदार उत्पादने व उपाय देणे हे आमचे ध्येय आहे. शेतीतील यशासाठी तुमचा विश्वासू साथीदार.",
        "Farmer Success": "शेतकऱ्यांची प्रगती", "We believe in empowering farmers to succeed across global landscapes.": "शेतकऱ्यांना यशस्वी होण्यासाठी सक्षम करण्यावर आमचा विश्वास आहे.",
        "Exceptional Quality": "उत्कृष्ट गुणवत्ता", "We are strictly committed to delivering exceptional quality manufacturing outputs.": "उत्पादनांमध्ये उत्कृष्ट गुणवत्ता देण्यासाठी आम्ही कटिबद्ध आहोत.",
        "Agri Innovation": "कृषी नवकल्पना", "We drive scientific innovation to address evolving agricultural challenges.": "बदलत्या कृषी आव्हानांवर उपाय शोधण्यासाठी आम्ही वैज्ञानिक नवकल्पनांना प्रोत्साहन देतो.",
        "True Partnership": "खरी भागीदारी", "We partner transparently with farmers to understand their localized soil needs.": "स्थानिक जमिनीच्या गरजा समजून घेण्यासाठी आम्ही शेतकऱ्यांसोबत पारदर्शक भागीदारी करतो.",
        "NPK Soluble": "विरघळणारी NPK खते", "Micronutrients": "सूक्ष्म अन्नद्रव्ये", "Biostimulants": "जैवउत्तेजक", "Liquid Range": "द्रवरूप उत्पादने", "Crop Protection": "पीक संरक्षण",
        "Water Soluble NPK Fertilizers": "पाण्यात विरघळणारी NPK खते", "Nutri Farm High-Purity Inputs": "न्यूट्री फार्म उच्च-शुद्धता उत्पादने",
        "Micronutrients & Chelates": "सूक्ष्म अन्नद्रव्ये आणि चिलेट्स", "Essential Element Optimization": "आवश्यक अन्नद्रव्यांचे संतुलन",
        "Biostimulants & Growth Boosters": "जैवउत्तेजक आणि वाढवर्धक", "Yield Maximization Technologies": "उत्पादन वाढवणारी तंत्रज्ञाने",
        "Liquid Fertilizers & Concentrates": "द्रवरूप खते आणि सांद्र उत्पादने", "Advanced Flowable Fluid Suspensions": "प्रगत प्रवाही द्रवरूप मिश्रणे",
        "Pesticides, Herbicides & Performance Fungicides": "कीटकनाशके, तणनाशके आणि प्रभावी बुरशीनाशके",
        "High-Purity Phosphate Rich Blend": "उच्च-शुद्ध फॉस्फेटयुक्त मिश्रण", "Balanced Multi-Phase Fuel": "संतुलित बहुघटक पोषण",
        "Growth Booster Formulation": "वाढवर्धक मिश्रण", "High-Potassium Yield Driver": "उच्च पालाशयुक्त उत्पादनवर्धक",
        "Starter Crop Complex": "पीकवाढीसाठी प्रारंभिक मिश्रण", "Phosphorus Powerhouse": "फॉस्फरसयुक्त प्रभावी मिश्रण",
        "Iron-Chelated PK Complex": "लोहयुक्त चिलेटेड PK मिश्रण", "SOP Based Crop Nutrition": "SOP आधारित पीक पोषण",
        "Pure Nitrogen Delivery": "शुद्ध नायट्रोजन पुरवठा", "Cell Wall Reinforcement": "पेशीभित्तिका मजबूत करणारे", "High-Nitrogen Vegetative Compound": "उच्च नायट्रोजनयुक्त वाढीचे मिश्रण",
        "Low Nitrogen Fruit Set Formula": "कमी नायट्रोजनयुक्त फळधारणा सूत्र", "Multi-Micronutrient Blend": "बहुसूक्ष्म अन्नद्रव्य मिश्रण",
        "Chelated Zinc Fertilizer": "चिलेटेड झिंक खत", "Chelated Iron Compound": "चिलेटेड लोह मिश्रण", "Water Soluble Boron Fertilizer": "पाण्यात विरघळणारे बोरॉन खत",
        "High Stability Chelate": "उच्च स्थिरतेचे चिलेट", "Advanced Plant Growth Booster": "प्रगत वनस्पती वाढवर्धक",
        "Concentrated Amino Acid 30%": "३०% सांद्र अमिनो आम्ल", "Silicon Based Surfactant": "सिलिकॉन-आधारित सर्फॅक्टंट", "Physiological Crop Activator": "पीकवाढ सक्रिय करणारे",
        "Organic Carbon Soil Granules": "सेंद्रिय कार्बनयुक्त मातीचे कण", "Ortho Silicic Acid (OSA) 2.0%": "ऑर्थो सिलिसिक आम्ल (OSA) २.०%",
        "Zinc Oxide 39.5% SC Concentrate": "झिंक ऑक्साइड ३९.५% SC सांद्र द्रावण", "Potassium Thio-Sulphate Fluid": "पोटॅशियम थायो-सल्फेट द्रावण",
        "Specialized Calcium Oxide Suspension": "विशेष कॅल्शियम ऑक्साइड मिश्रण", "Fipronil 40% + Imidacloprid 40% WG": "फिप्रोनिल ४०% + इमिडाक्लोप्रिड ४०% WG",
        "Emamectin Benzoate 3.0% + Thiamethoxam 12.0% WG": "इमामेक्टिन बेंझोएट ३.०% + थायामेथॉक्सम १२.०% WG",
        "Tebuconazole 50% + Trifloxystrobin 25% WG": "टेब्युकोनॅझोल ५०% + ट्रायफ्लॉक्सीस्ट्रोबिन २५% WG",
        "Azoxystrobin 11% + Tebuconazole 18.3% SC": "अ‍ॅझॉक्सीस्ट्रोबिन ११% + टेब्युकोनॅझोल १८.३% SC",
        "Glufosinate Ammonium 13.5% w/w SL": "ग्लुफोसिनेट अमोनियम १३.५% w/w SL",
        "Enquiry": "चौकशी",
        "Optimized formula to catalyze robust root architectures, early shoot initialization, and energy routing systems.": "मजबूत मुळांची वाढ, सुरुवातीच्या फुटव्यांची निर्मिती आणि वनस्पतीतील ऊर्जा वहनासाठी अनुकूलित सूत्र.",
        "Provides fully uniform, equalized ratios of essential primary macronutrients during standard vegetative cycles.": "वनस्पतीच्या वाढीच्या टप्प्यात आवश्यक मुख्य अन्नद्रव्यांचे सम प्रमाणात पोषण करते.",
        "Specialized compound balancing dual nitrogen pipelines with standard phosphate payloads for development spikes.": "पीकवाढीच्या महत्त्वाच्या टप्प्यांसाठी नायट्रोजन आणि फॉस्फेटचे संतुलित मिश्रण.",
        "Engineered to maximize grain filling weight, fruit sizing distribution, sugar translocation, and drought stress tolerances.": "दाणे भरणे, फळांचा आकार, साखरेचे वहन आणि दुष्काळ सहनशक्ती सुधारण्यासाठी तयार केलेले.",
        "Concentrated ammoniacal nitrogen combined with high water-soluble phosphate structures for rapid crop development stages.": "पीकवाढीच्या सुरुवातीच्या टप्प्यांसाठी अमोनियाकल नायट्रोजन आणि पाण्यात विरघळणारे फॉस्फेट यांचे सांद्र मिश्रण.",
        "Highly soluble compound built for micro-irrigation systems to correct nutrient profiling locks quickly during establishment blocks.": "सूक्ष्म सिंचनासाठी अत्यंत विद्राव्य मिश्रण; पीक स्थापन होताना अन्नद्रव्यांची कमतरता लवकर भरून काढते.",
        "Combines phosphorus and potassium assets with chelated iron to treat chlorosis patterns under structural stress loops.": "फॉस्फरस, पालाश आणि चिलेटेड लोह यांचे मिश्रण; पानांचा पिवळेपणा कमी करण्यास मदत करते.",
        "Premium sulfate-based compound built specifically for drip irrigation systems and direct foliar deployment metrics.": "ठिबक सिंचन आणि पर्णीय फवारणीसाठी खास तयार केलेले दर्जेदार सल्फेट-आधारित मिश्रण.",
        "Highly soluble, fast-acting crystalline compound designed to trigger fast greening loops and quick canopy bursts.": "जलद हिरवळ आणि पानांची वाढ साधण्यासाठी तयार केलेले वेगाने कार्य करणारे स्फटिकी मिश्रण.",
        "Dual-action nutrient line protecting blossom end properties, cell division tracking, and strength indicators across produce skin walls.": "फळांची गुणवत्ता, पेशी विभाजन आणि फळांच्या सालाची मजबुती यांना मदत करणारे कॅल्शियम-बोरॉन पोषण.",
        "Concentrated nitrogen baseline optimized for rapid canopy production, healthy leaf volume, and early season growth spurts.": "जलद पर्णवाढ, निरोगी पानांची संख्या आणि हंगामाच्या सुरुवातीच्या जोमदार वाढीसाठी सांद्र नायट्रोजन.",
        "Phosphate and Potash balance ideal for late flower optimization, fruit anchoring, sugar accumulation, and stalk integrity fields.": "फुलोऱ्यानंतरचा टप्पा, फळधारणा, साखरेचा संचय आणि खोडाची मजबुती यांसाठी फॉस्फेट-पालाश संतुलन.",
        "Balanced protein hydrolysate multi-micronutrient mixture tailored to completely solve crop deficiency locks and physiological blocks.": "पीकातील सूक्ष्म अन्नद्रव्यांची कमतरता भरून काढण्यासाठी प्रथिन हायड्रोलायसेट आणि अनेक सूक्ष्म अन्नद्रव्यांचे संतुलित मिश्रण.",
        "Premium chelated zinc tracking loop to optimize enzyme activation, plant hormone balancing, and leaf structure expansion loops.": "एन्झाइम सक्रियता, वनस्पती संप्रेरकांचे संतुलन आणि पानांची वाढ यांसाठी दर्जेदार चिलेटेड झिंक.",
        "High-efficiency chelated iron formulation built to restore clean chlorophyll processing profiles and fix leaf yellowing instantly.": "हरितद्रव्य निर्मितीस मदत करणारे आणि पानांचा पिवळेपणा कमी करणारे कार्यक्षम चिलेटेड लोह.",
        "Disodium Octaborate Tetrahydrate structure optimizing calcium flow metrics and uniform pollen tube setting parameters across fruit lines.": "कॅल्शियमचे वहन आणि परागनलिकेची एकसमान वाढ सुधारण्यास मदत करणारे डिसोडियम ऑक्टाबोरेट टेट्राहायड्रेट.",
        "Advanced highly stable organic iron chelate engineered explicitly to operate safely inside alkaline conditions and high-pH clay belts.": "अल्कधर्मी आणि उच्च pH असलेल्या जमिनीत प्रभावीपणे काम करणारे स्थिर सेंद्रिय लोह चिलेट.",
        "Scientifically cross-linked matrix of pure humic acids, complex amino asset chains, and targeted biochemical organic catalysts.": "ह्युमिक आम्ले, अमिनो आम्ले आणि जैवरासायनिक घटकांचे वैज्ञानिक पद्धतीने तयार केलेले मिश्रण.",
        "Highly concentrated amino acid formulation engineered to force fast protein metabolism and structural cell expansion loops.": "प्रथिनांची चयापचय क्रिया आणि पेशींची वाढ जलद करण्यासाठी तयार केलेले सांद्र अमिनो आम्ल.",
        "Premium organo-silicon liquid activator serving as an ultra-spreading sticker, penetration enhancer, and plant protection canvas asset.": "फवारणीचा प्रसार आणि शोषण सुधारण्यासाठी वापरले जाणारे दर्जेदार ऑर्गनो-सिलिकॉन द्रवरूप सक्रियक.",
        "Advanced botanical formulation supplying a rich cluster of natural amino acids, vitamins, and cellular stress mitigation compounds.": "नैसर्गिक अमिनो आम्ले, जीवनसत्त्वे आणि ताण कमी करणारे घटक असलेले वनस्पती-आधारित मिश्रण.",
        "High-grade organic carbon matrix built to revitalize base soil biology structures, unlock fertilizer components, and preserve moisture lines.": "जमिनीतील जैविक क्रिया सुधारण्यासाठी, खतांचे अन्नद्रव्य उपलब्ध करण्यासाठी आणि ओलावा टिकवण्यासाठी उच्च दर्जाचा सेंद्रिय कार्बन.",
        "Highly bio-available silicon fluid formulation designed to reinforce plant cell walls and protect crops from severe environmental stress parameters.": "वनस्पतींच्या पेशीभित्तिका मजबूत करून प्रतिकूल पर्यावरणीय ताणापासून पिकांचे संरक्षण करणारे सहज उपलब्ध सिलिकॉन द्रावण.",
        "Concentrated flowable fluid suspension supplying pure elemental zinc density parameters efficiently through direct leaf and foliar routes.": "पानांद्वारे झिंक पुरवण्यासाठी तयार केलेले सांद्र प्रवाही द्रवरूप मिश्रण.",
        "Premium Potassium Thio-Sulphate fluid supplying dual potash and sulfur pathways during final reproductive and grain filling cycles.": "पीकाच्या प्रजनन आणि दाणे भरण्याच्या अंतिम टप्प्यात पालाश व गंधक पुरवणारे दर्जेदार द्रावण.",
        "Advanced liquid suspension matched with specific micro-nutrient triggers to boost calcium mobility, shelf life, and vascular thickness.": "कॅल्शियमचे वहन, साठवण क्षमता आणि ऊतकांची मजबुती वाढवण्यासाठी सूक्ष्म अन्नद्रव्यांसह तयार केलेले द्रवरूप मिश्रण.",
        "Dual action systemic and contact insecticide complex designed to dismantle stubborn pest infestations across commercial cash crops.": "व्यावसायिक पिकांवरील किडींच्या नियंत्रणासाठी दुहेरी क्रिया करणारे आंतरप्रवाही व संपर्क कीटकनाशक.",
        "Advanced water-dispersible granules creating a fast-acting protective barrier to neutralize chewing and sucking insect vectors.": "पाने कुरतडणाऱ्या आणि रस शोषणाऱ्या किडींविरुद्ध जलद संरक्षण देणारे पाण्यात पसरणारे दाणेदार कीटकनाशक.",
        "Premium systemic broad-spectrum protective shield inhibiting fungal respiration networks immediately upon crop application.": "फवारणीनंतर बुरशीची वाढ रोखणारे व्यापक प्रभावाचे आंतरप्रवाही बुरशीनाशक.",
        "Dual systemic protective fluid combination managing advanced multi-stage spore barriers over high-value field vegetation.": "महत्त्वाच्या पिकांवरील बुरशीजन्य रोगांपासून संरक्षणासाठी दुहेरी आंतरप्रवाही द्रवरूप मिश्रण.",
        "Highly effective non-selective post-emergence contact herbicide targeting persistent weed foliage loops safely.": "उगवणीनंतर तणांच्या पानांवर कार्य करणारे प्रभावी, अविशिष्ट संपर्क तणनाशक.",
        "Become a Distributor | Join Our Growing Network": "वितरक बना | आमच्या वाढत्या नेटवर्कमध्ये सहभागी व्हा",
        "Sahara Agro Chemicals & Fertilizers is partner to thousands of farmers and retailers across India.": "सहारा अ‍ॅग्रो केमिकल्स अँड फर्टिलायझर्स भारतभरातील हजारो शेतकरी आणि विक्रेत्यांचा साथीदार आहे.",
        "Apply Now": "आत्ताच अर्ज करा", "Corporate Manufacturing Unit": "कॉर्पोरेट उत्पादन केंद्र", "Imported, Packed & Marketed By:": "आयात, पॅकिंग आणि विपणन:",
        "Regulatory Compliance": "नियामक अनुपालन", "RC No:": "परवाना क्र.:", "Issued By: Commissioner of Agriculture, Pune": "जारीकर्ता: कृषी आयुक्त, पुणे",
        "Customer Support": "ग्राहक सहाय्य", "All Rights Reserved.": "सर्व हक्क राखीव.", "Monitored by Corporate Digital Administration.": "कॉर्पोरेट डिजिटल प्रशासनाच्या देखरेखीखाली.",
        "© 2026 Sahara Agro Chemicals & Fertilizers. All Rights Reserved. | Monitored by Corporate Digital Administration.": "© २०२६ सहारा अ‍ॅग्रो केमिकल्स अँड फर्टिलायझर्स. सर्व हक्क राखीव. | कॉर्पोरेट डिजिटल प्रशासनाच्या देखरेखीखाली.",
        "Authorized Retailer & Stockist Network": "अधिकृत विक्रेता आणि वितरक नेटवर्क", "Filter Partners By District Area:": "जिल्ह्यानुसार विक्रेते निवडा:",
        "Show All Districts": "सर्व जिल्हे दाखवा", "Dealer Name": "विक्रेत्याचे नाव", "Dealer Address": "विक्रेत्याचा पत्ता",
        "View Map": "नकाशा पहा", "District": "जिल्हा", "PIN Code": "पिन कोड", "Dealer Mobile Number": "विक्रेत्याचा मोबाइल क्रमांक", "Connect": "संपर्क",
        "Ahilyanagar": "अहिल्यानगर", "Akola": "अकोला", "Amravati": "अमरावती", "Beed": "बीड", "Bhandara": "भंडारा",
        "Buldhana": "बुलढाणा", "Chandrapur": "चंद्रपूर", "Chhatrapati Sambhajinagar": "छत्रपती संभाजीनगर", "Dharashiv": "धाराशिव",
        "Dhule": "धुळे", "Gadchiroli": "गडचिरोली", "Gondia": "गोंदिया", "Hingoli": "हिंगोली", "Jalgaon": "जळगाव", "Jalna": "जालना",
        "Kolhapur": "कोल्हापूर", "Latur": "लातूर", "Mumbai City": "मुंबई शहर", "Mumbai Suburban": "मुंबई उपनगर", "Nagpur": "नागपूर",
        "Nanded": "नांदेड", "Nandurbar": "नंदुरबार", "Nashik": "नाशिक", "Palghar": "पालघर", "Parbhani": "परभणी", "Pune": "पुणे",
        "Raigad": "रायगड", "Ratnagiri": "रत्नागिरी", "Sangli": "सांगली", "Satara": "सातारा", "Sindhudurg": "सिंधुदुर्ग",
        "Solapur": "सोलापूर", "Thane": "ठाणे", "Wardha": "वर्धा", "Washim": "वाशिम", "Yavatmal": "यवतमाळ",
        "📍 View Location": "📍 ठिकाण पहा", "WhatsApp": "व्हॉट्सॲप", "No authorized stockists registered in this district area currently.": "या जिल्ह्यात सध्या कोणतेही अधिकृत विक्रेते नोंदणीकृत नाहीत."
    };

    const languageNames = { en: "English", mr: "मराठी" };
    const originalText = new WeakMap();
    let currentLanguage = "en";

    function translateTextNode(node) {
        if (!originalText.has(node)) originalText.set(node, node.nodeValue);
        const source = originalText.get(node);
        const trimmed = source.trim();
        if (!trimmed) return;
        const translated = currentLanguage === "mr" ? (translations[trimmed] || trimmed) : trimmed;
        node.nodeValue = source.replace(trimmed, translated);
    }

    function applyLanguage(language) {
        currentLanguage = language === "mr" ? "mr" : "en";
        document.documentElement.lang = currentLanguage === "mr" ? "mr" : "en";
        document.querySelectorAll(".language-toggle button").forEach(button => {
            button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
            button.setAttribute("aria-label", languageNames[button.dataset.language]);
        });
        document.querySelectorAll(".language-toggle").forEach(toggle => toggle.setAttribute("aria-label", currentLanguage === "mr" ? "भाषा निवडा" : "Choose language"));
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) translateTextNode(walker.currentNode);
        const titleTranslations = {
            "Sahara Agro Chemicals & Fertilizers | Complete Corporate Catalog": "सहारा अ‍ॅग्रो केमिकल्स अँड फर्टिलायझर्स | संपूर्ण उत्पादन सूची",
            "Locate A Sahara Agro Retailer | Authorized Partner Network": "सहारा अ‍ॅग्रो विक्रेता शोधा | अधिकृत भागीदार नेटवर्क"
        };
        const englishTitles = Object.keys(titleTranslations);
        const title = document.title;
        document.title = currentLanguage === "mr" ? (titleTranslations[title] || titleTranslations[englishTitles.find(key => title === titleTranslations[key])] || title) : (englishTitles.find(key => titleTranslations[key] === title) || title);
        document.querySelectorAll(".product-card").forEach(card => {
            const link = card.querySelector(".btn-enquiry");
            const name = card.querySelector("h3")?.textContent.trim();
            if (link && name) {
                const message = currentLanguage === "mr" ? `${name} या उत्पादनाबद्दल मला अधिक माहिती हवी आहे.` : `Hello, I would like to enquire about ${name}.`;
                link.href = `https://wa.me/917620792897?text=${encodeURIComponent(message)}`;
            }
        });
        try { localStorage.setItem("sahara-language", currentLanguage); } catch (_) { }
    }

    document.addEventListener("click", event => {
        const button = event.target.closest("[data-language]");
        if (button) applyLanguage(button.dataset.language);
    });
    document.addEventListener("DOMContentLoaded", () => {
        let saved = "en";
        try { saved = localStorage.getItem("sahara-language") || "en"; } catch (_) { }
        applyLanguage(saved);
        new MutationObserver(records => records.forEach(record => {
            record.addedNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
                else if (node.nodeType === Node.ELEMENT_NODE) {
                    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
                    while (walker.nextNode()) translateTextNode(walker.currentNode);
                }
            });
        })).observe(document.body, { childList: true, subtree: true });
    });
})();
