// 日本でよく見られる昆虫50種と、日本にはいないが人気・美麗な昆虫15種、あわせて65種を収録。
// 2歳児向けにやさしい言葉で説明しています。写真は Wikimedia Commons のフリーライセンス画像を使用。
const INSECTS = [
  // ---- にほんの むし (region: "japan") ----
  { id: "kabutomushi", name: "カブトムシ", scientificName: "Trypoxylus dichotomus", region: "japan", category: "kabuto-kuwagata",
    desc: "つのが かっこいい くろいむし。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Kabutomushi_Japanese_Beetle_%28modified%29.png", license: "CC BY-SA 3.0", author: "Gombe; derivative work: Bruno P. Ramos", sourcePage: "https://commons.wikimedia.org/wiki/File:Kabutomushi_Japanese_Beetle_(modified).png" } },
  { id: "nokogiri-kuwagata", name: "ノコギリクワガタ", scientificName: "Prosopocoilus inclinatus", region: "japan", category: "kabuto-kuwagata",
    desc: "のこぎりみたいな ぎざぎざの はさみが あるよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/1/14/Prosopocoilus_inclinatus_by_OpenCage.jpg", license: "CC BY-SA 2.5", author: "OpenCage (opencage.info)", sourcePage: "https://commons.wikimedia.org/wiki/File:Prosopocoilus_inclinatus_by_OpenCage.jpg" } },
  { id: "miyama-kuwagata", name: "ミヤマクワガタ", scientificName: "Lucanus maculifemoratus", region: "japan", category: "kabuto-kuwagata", multiInPhoto: true,
    desc: "やまに すんでいて、つのが みっつに わかれているよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Lucanus_maculifemoratus_maculifemoratus_sjh.jpg", license: "CC BY-SA 2.5", author: "Shawn Hanrahan", sourcePage: "https://commons.wikimedia.org/wiki/File:Lucanus_maculifemoratus_maculifemoratus_sjh.jpg" } },
  { id: "hirata-kuwagata", name: "ヒラタクワガタ", scientificName: "Dorcus titanus", region: "japan", category: "kabuto-kuwagata", multiInPhoto: true,
    desc: "からだが ぺったんこで、はさみが つよいよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Dorcus_titanus_sjh.jpg", license: "CC BY-SA 2.5", author: "No machine-readable author provided. Kugamazog~commonswiki assumed (based on copyright claims).", sourcePage: "https://commons.wikimedia.org/wiki/File:Dorcus_titanus_sjh.jpg" } },
  { id: "ko-kuwagata", name: "コクワガタ", scientificName: "Dorcus rectus", region: "japan", category: "kabuto-kuwagata",
    desc: "ちいさいけど げんきな くわがたむしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/2/22/Dorcus_rectus_01.JPG", license: "CC BY-SA 3.0", author: "Σ64", sourcePage: "https://commons.wikimedia.org/wiki/File:Dorcus_rectus_01.JPG" } },
  { id: "nanahoshi-tentou", name: "ナナホシテントウ", scientificName: "Coccinella septempunctata", region: "japan", category: "sonota", multiInPhoto: true,
    desc: "あかい せなかに くろい てんてんが ななつ あるよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/b/be/%E3%83%8A%E3%83%8A%E3%83%9B%E3%82%B7%E3%83%86%E3%83%B3%E3%83%88%E3%82%A6_Coccinella_septempunctata.JPG", license: "CC BY-SA 3.0", author: "Alpsdake", sourcePage: "https://commons.wikimedia.org/wiki/File:%E3%83%8A%E3%83%8A%E3%83%9B%E3%82%B7%E3%83%86%E3%83%B3%E3%83%88%E3%82%A6_Coccinella_septempunctata.JPG" } },
  { id: "monshiro-chou", name: "モンシロチョウ", scientificName: "Pieris rapae", region: "japan", category: "chou-ga",
    desc: "しろい はねで ひらひら とぶよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/7/74/Pieris_rapae_edit2.jpg", license: "CC BY 3.0", author: "Bruce Marlin; derivative work: IdLoveOne", sourcePage: "https://commons.wikimedia.org/wiki/File:Pieris_rapae_edit2.jpg" } },
  { id: "ageha-chou", name: "アゲハチョウ", scientificName: "Papilio xuthus", region: "japan", category: "chou-ga",
    desc: "おおきな はねで ゆうゆうと とぶ ちょうちょだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Papilio_xuthus_070707.jpg", license: "CC BY 3.0", author: "Yoshikazu Takahira", sourcePage: "https://commons.wikimedia.org/wiki/File:Papilio_xuthus_070707.jpg" } },
  { id: "kuro-ageha", name: "クロアゲハ", scientificName: "Papilio protenor", region: "japan", category: "chou-ga",
    desc: "くろい はねが きれいな ちょうちょだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Open_wing_basking_position_of_Papilio_protenor_%28Cramer%2C1775%29_-_Spangle.jpg", license: "CC BY-SA 4.0", author: "Atanu Bose Photography", sourcePage: "https://commons.wikimedia.org/wiki/File:Open_wing_basking_position_of_Papilio_protenor_%28Cramer%2C1775%29_-_Spangle.jpg" } },
  { id: "ki-ageha", name: "キアゲハ", scientificName: "Papilio machaon", region: "japan", category: "chou-ga",
    desc: "きいろい はねに もようが ある ちょうちょだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Papilio_machaon_-_Swallowtail_1.jpg", license: "CC BY-SA 3.0", author: "Zeynel Cebeci", sourcePage: "https://commons.wikimedia.org/wiki/File:Papilio_machaon_-_Swallowtail_1.jpg" } },
  { id: "tsumaguro-hyoumon", name: "ツマグロヒョウモン", scientificName: "Argynnis hyperbius", region: "japan", category: "chou-ga",
    desc: "はねの さきが くろい ひょうもんちょうだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/4/47/Argynnis_hyperbius_with_Bokeh.jpg", license: "Public domain", author: "Laitche", sourcePage: "https://commons.wikimedia.org/wiki/File:Argynnis_hyperbius_with_Bokeh.jpg" } },
  { id: "monki-chou", name: "モンキチョウ", scientificName: "Colias erate", region: "japan", category: "chou-ga",
    desc: "きいろい はねの かわいい ちょうちょだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Eastern_Pale_Clouded_Yellow_in_Osaka.jpg", license: "CC BY-SA 3.0", author: "Kuribo (talk)", sourcePage: "https://commons.wikimedia.org/wiki/File:Eastern_Pale_Clouded_Yellow_in_Osaka.jpg" } },
  { id: "ruri-tateha", name: "ルリタテハ", scientificName: "Kaniska canace", region: "japan", category: "chou-ga",
    desc: "はねに あおい すじもようが あるよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/8/87/Open_wing_basking_position_of_Kaniska_canace_%28Linnaeus%2C_1763%29_-_Blue_Admiral.jpg", license: "CC BY-SA 4.0", author: "Atanu Bose Photography", sourcePage: "https://commons.wikimedia.org/wiki/File:Open_wing_basking_position_of_Kaniska_canace_%28Linnaeus%2C_1763%29_-_Blue_Admiral.jpg" } },
  { id: "oomurasaki", name: "オオムラサキ", scientificName: "Sasakia charonda", region: "japan", category: "chou-ga",
    desc: "にほんの くにの ちょうちょ。 むらさきいろに ひかる はねが きれいだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Sasakia_charonda_%28male%29.jpg", license: "CC BY-SA 4.0", author: "Alpsdake", sourcePage: "https://commons.wikimedia.org/wiki/File:Sasakia_charonda_%28male%29.jpg" } },
  { id: "oogomadara", name: "オオゴマダラ", scientificName: "Idea leuconoe", region: "japan", category: "chou-ga",
    desc: "おおきな しろい はねに くろい もようが あるよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/1/16/Wei%C3%9Fe_Baumnymphe_Idea_leuconoe_Richard_Bartz.jpg", license: "CC BY-SA 2.5", author: "Richard Bartz, Munich aka Makro Freak", sourcePage: "https://commons.wikimedia.org/wiki/File:Wei%C3%9Fe_Baumnymphe_Idea_leuconoe_Richard_Bartz.jpg" } },
  { id: "kuro-oo-ari", name: "クロオオアリ", scientificName: "Camponotus japonicus", region: "japan", category: "hachi-ari",
    desc: "みんなで なかよく はたらくよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Camponotus_japonicus_on_metallic_column_-_1.jpg", license: "CC BY-SA 4.0", author: "KKPCW", sourcePage: "https://commons.wikimedia.org/wiki/File:Camponotus_japonicus_on_metallic_column_-_1.jpg" } },
  { id: "seiyou-mitsubachi", name: "セイヨウミツバチ", scientificName: "Apis mellifera", region: "japan", category: "hachi-ari",
    desc: "おはなの みつを あつめる はたらきものだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/1/1d/European_honey_bee_extracts_nectar.jpg", license: "Public domain", author: "John Severns (Severnjc)", sourcePage: "https://commons.wikimedia.org/wiki/File:European_honey_bee_extracts_nectar.jpg" } },
  { id: "nihon-mitsubachi", name: "ニホンミツバチ", scientificName: "Apis cerana japonica", region: "japan", category: "hachi-ari",
    desc: "にほんに むかしから いる みつばちだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/d/df/%E3%83%8B%E3%83%9B%E3%83%B3%E3%83%9F%E3%83%84%E3%83%90%E3%83%81_Apis_cerana_japonica_-_15758597483.jpg", license: "CC BY-SA 2.0", author: "urasimaru", sourcePage: "https://commons.wikimedia.org/wiki/File:%E3%83%8B%E3%83%9B%E3%83%B3%E3%83%9F%E3%83%84%E3%83%90%E3%83%81_Apis_cerana_japonica_-_15758597483.jpg" } },
  { id: "abura-zemi", name: "アブラゼミ", scientificName: "Graptopsaltria nigrofuscata", region: "japan", category: "semi-tonbo",
    desc: "じーじーって なく、はねが ちゃいろい せみだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aburazemi_%28Graptopsaltria_nigrofuscata%29.jpg", license: "CC BY-SA 2.5", author: "Kubo Michal", sourcePage: "https://commons.wikimedia.org/wiki/File:Aburazemi_%28Graptopsaltria_nigrofuscata%29.jpg" } },
  { id: "kuma-zemi", name: "クマゼミ", scientificName: "Cryptotympana facialis", region: "japan", category: "semi-tonbo",
    desc: "しゃわしゃわって おおきな こえで なくよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Cryptotympana_facialis_01.jpg", license: "CC BY-SA 4.0", author: "Syrio", sourcePage: "https://commons.wikimedia.org/wiki/File:Cryptotympana_facialis_01.jpg" } },
  { id: "minmin-zemi", name: "ミンミンゼミ", scientificName: "Hyalessa maculaticollis", region: "japan", category: "semi-tonbo",
    desc: "みーんみーんって なくから この なまえだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Hyalessa_maculaticollis.JPG", license: "CC BY-SA 4.0", author: "Alpsdake", sourcePage: "https://commons.wikimedia.org/wiki/File:Hyalessa_maculaticollis.JPG" } },
  { id: "tsukutsukuboushi", name: "ツクツクボウシ", scientificName: "Meimuna opalifera", region: "japan", category: "semi-tonbo",
    desc: "つくつくぼうしって なくよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Meimuna_opalifera1.jpg", license: "CC BY-SA 3.0", author: "KENPEI", sourcePage: "https://commons.wikimedia.org/wiki/File:Meimuna_opalifera1.jpg" } },
  { id: "higurashi", name: "ヒグラシ", scientificName: "Tanna japonensis", region: "japan", category: "semi-tonbo",
    desc: "あさや ゆうがた、かなかなって きれいな こえで なくよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Tanna_japonensis_%28male%29.jpg", license: "CC BY-SA 4.0", author: "Alpsdake", sourcePage: "https://commons.wikimedia.org/wiki/File:Tanna_japonensis_%28male%29.jpg" } },
  { id: "shiokara-tonbo", name: "シオカラトンボ", scientificName: "Orthetrum albistylum", region: "japan", category: "semi-tonbo",
    desc: "からだが しろっぽい こなで おおわれているよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Libellule-15-04-26.JPG", license: "CC BY 2.0", author: "Thomas Bresson", sourcePage: "https://commons.wikimedia.org/wiki/File:Libellule-15-04-26.JPG" } },
  { id: "oniyanma", name: "オニヤンマ", scientificName: "Anotogaster sieboldii", region: "japan", category: "semi-tonbo",
    desc: "にほんで いちばん おおきい とんぼだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/7/77/Anotogaster_sieboldii_01.jpg", license: "CC BY-SA 4.0", author: "Johnsonwang6688", sourcePage: "https://commons.wikimedia.org/wiki/File:Anotogaster_sieboldii_01.jpg" } },
  { id: "gin-yanma", name: "ギンヤンマ", scientificName: "Anax parthenope", region: "japan", category: "semi-tonbo",
    desc: "みずうみや いけを すいすい とぶ とんぼだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/7/77/Lesser_emperor_%28Anax_parthenope%29_male.jpg", license: "CC BY-SA 4.0", author: "Charles J. Sharp", sourcePage: "https://commons.wikimedia.org/wiki/File:Lesser_emperor_(Anax_parthenope)_male.jpg" } },
  { id: "aki-akane", name: "アキアカネ", scientificName: "Sympetrum frequens", region: "japan", category: "semi-tonbo",
    desc: "あきに あかく なる あかとんぼだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/0/00/Sympetrum_frequens_%28male%29.JPG", license: "CC BY-SA 4.0", author: "Alpsdake", sourcePage: "https://commons.wikimedia.org/wiki/File:Sympetrum_frequens_(male).JPG" } },
  { id: "genji-botaru", name: "ゲンジボタル", scientificName: "Luciola cruciata", region: "japan", category: "sonota",
    desc: "よるに おしりが ぴかぴか ひかるよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Luciola_cruciata_on_the_grass_-_7.jpg", license: "CC BY-SA 4.0", author: "Kyu3a", sourcePage: "https://commons.wikimedia.org/wiki/File:Luciola_cruciata_on_the_grass_-_7.jpg" } },
  { id: "heike-botaru", name: "ヘイケボタル", scientificName: "Luciola lateralis", region: "japan", category: "sonota",
    desc: "げんじぼたるより ちいさい ほたるだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Japanese_Firefly_%E3%83%98%E3%82%A4%E3%82%B1%E3%83%9C%E3%82%BF%E3%83%AB_Luciola_lateralis.jpg", license: "CC BY-SA 2.0", author: "yellow_bird_woodstock", sourcePage: "https://commons.wikimedia.org/wiki/File:Japanese_Firefly_%E3%83%98%E3%82%A4%E3%82%B1%E3%83%9C%E3%82%BF%E3%83%AB_Luciola_lateralis.jpg" } },
  { id: "tonosama-batta", name: "トノサマバッタ", scientificName: "Locusta migratoria", region: "japan", category: "batta-kamakiri",
    desc: "とのさまみたいに りっぱな おおきい ばったさん。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Locusta_migratoria.jpg", license: "Public domain", author: "Matsumomushi", sourcePage: "https://commons.wikimedia.org/wiki/File:Locusta_migratoria.jpg" } },
  { id: "shouryou-batta", name: "ショウリョウバッタ", scientificName: "Acrida cinerea", region: "japan", category: "batta-kamakiri",
    desc: "ほそながい からだの ばったさんだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Acrida_cinerea_standing_on_the_road_along_rice_field_-_2.jpg", license: "CC BY-SA 4.0", author: "KKPCW", sourcePage: "https://commons.wikimedia.org/wiki/File:Acrida_cinerea_standing_on_the_road_along_rice_field_-_2.jpg" } },
  { id: "onbu-batta", name: "オンブバッタ", scientificName: "Atractomorpha lata", region: "japan", category: "batta-kamakiri",
    desc: "おかあさんが こどもを おんぶ することが あるよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Atractomorpha_lata_mating_on_the_leaf_-_4.jpg", license: "CC BY-SA 4.0", author: "Kyu3a", sourcePage: "https://commons.wikimedia.org/wiki/File:Atractomorpha_lata_mating_on_the_leaf_-_4.jpg" } },
  { id: "oo-kamakiri", name: "オオカマキリ", scientificName: "Tenodera aridifolia", region: "japan", category: "batta-kamakiri",
    desc: "まえあしが かまの かたちで つよそうだね。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Tenodera_aridifolia_DSCN9675.jpg", license: "CC BY-SA 3.0", author: "Yasunori Koide", sourcePage: "https://commons.wikimedia.org/wiki/File:Tenodera_aridifolia_DSCN9675.jpg" } },
  { id: "ko-kamakiri", name: "コカマキリ", scientificName: "Statilia maculata", region: "japan", category: "batta-kamakiri",
    desc: "ちいさめの からだの かまきりさんだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Asian_Jumping_Mantis%2C_Taean%2C_KR-GN%2C_KR_imported_from_iNaturalist_photo_2801875.jpg", license: "CC BY 4.0", author: "Kim, Hyun-tae", sourcePage: "https://commons.wikimedia.org/wiki/File:Asian_Jumping_Mantis,_Taean,_KR-GN,_KR_imported_from_iNaturalist_photo_2801875.jpg" } },
  { id: "suzumushi", name: "スズムシ", scientificName: "Meloimorpha japonica", region: "japan", category: "batta-kamakiri", multiInPhoto: true,
    desc: "りーんりーんって すずの おとで なくよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Suzumushi.jpg", license: "CC BY-SA 3.0", author: "Monami", sourcePage: "https://commons.wikimedia.org/wiki/File:Suzumushi.jpg" } },
  { id: "matsumushi", name: "マツムシ", scientificName: "Xenogryllus marmoratus", region: "japan", category: "batta-kamakiri",
    desc: "ちんちろりんって きれいな こえで なくよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Xenogryllus_marmoratus_from_iNaturalist_photo_415260647.jpg", license: "CC0", author: "Agnes Trekker (agnestrekker)", sourcePage: "https://commons.wikimedia.org/wiki/File:Xenogryllus_marmoratus_from_iNaturalist_photo_415260647.jpg" } },
  { id: "enma-koorogi", name: "エンマコオロギ", scientificName: "Teleogryllus emma", region: "japan", category: "batta-kamakiri",
    desc: "こおろぎの なかまで、りーりーって なくよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Teleogryllus_emma_female_on_sidewalk.jpg", license: "CC BY-SA 4.0", author: "Phonon.b", sourcePage: "https://commons.wikimedia.org/wiki/File:Teleogryllus_emma_female_on_sidewalk.jpg" } },
  { id: "kera", name: "ケラ", scientificName: "Gryllotalpa brachyptera", region: "japan", category: "batta-kamakiri",
    desc: "つちの なかを ほって すすむ むしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Mole_cricket02.jpg", license: "GFDL 1.2", author: "Fir0002/Flagstaffotos", sourcePage: "https://commons.wikimedia.org/wiki/File:Mole_cricket02.jpg" } },
  { id: "kanabun", name: "カナブン", scientificName: "Rhomborrhina japonica", region: "japan", category: "sonota",
    desc: "きらきら ひかる みどりいろの からだだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/W_kanabun4081.jpg", license: "CC BY-SA 3.0", author: "Uncle Carl (Kusabana Photo Studio)", sourcePage: "https://commons.wikimedia.org/wiki/File:W_kanabun4081.jpg" } },
  { id: "koganemushi", name: "コガネムシ", scientificName: "Mimela splendens", region: "japan", category: "sonota",
    desc: "きんいろに ひかる うつくしい むしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/0/06/Mimela_splendens_1.JPG", license: "Public Domain", author: "BrianAdler", sourcePage: "https://commons.wikimedia.org/wiki/File:Mimela_splendens_1.JPG" } },
  { id: "gengorou", name: "ゲンゴロウ", scientificName: "Cybister japonicus", region: "japan", category: "mizu-no-mushi",
    desc: "みずの なかを すいすい およぐ むしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/%E9%A3%BC%E8%82%B2%E4%B8%8B%E3%81%A7%E3%81%AE%E3%82%B2%E3%83%B3%E3%82%B4%E3%83%AD%E3%82%A6.JPG", license: "CC BY-SA 3.0", author: "射撃部隊", sourcePage: "https://commons.wikimedia.org/wiki/File:%E9%A3%BC%E8%82%B2%E4%B8%8B%E3%81%A7%E3%81%AE%E3%82%B2%E3%83%B3%E3%82%B4%E3%83%AD%E3%82%A6.JPG" } },
  { id: "tagame", name: "タガメ", scientificName: "Kirkaldyia deyrolli", region: "japan", category: "mizu-no-mushi",
    desc: "みずの なかに すむ おおきな むしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Lethocerus_deyrollei.jpg", license: "CC BY-SA 2.5", author: "OpenCage", sourcePage: "https://commons.wikimedia.org/wiki/File:Lethocerus_deyrollei.jpg" } },
  { id: "amenbo", name: "アメンボ", scientificName: "Aquarius remigis", region: "japan", category: "mizu-no-mushi",
    desc: "みずの うえを すいすい すべって あるくよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/WaterstriderEnWiki.jpg", license: "CC BY-SA 3.0", author: "Wikipedia english (PD)", sourcePage: "https://commons.wikimedia.org/wiki/File:WaterstriderEnWiki.jpg" } },
  { id: "mizu-kamakiri", name: "ミズカマキリ", scientificName: "Laccotrephes japonensis", region: "japan", category: "mizu-no-mushi",
    desc: "みずの なかで くらす、かまきりに にた むしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Laccotrephes_japonensis_Kyoto_aquarium.jpg", license: "CC BY-SA 4.0", author: "Totti", sourcePage: "https://commons.wikimedia.org/wiki/File:Laccotrephes_japonensis_Kyoto_aquarium.jpg" } },
  { id: "yamato-tamamushi", name: "ヤマトタマムシ", scientificName: "Chrysochroa fulgidissima", region: "japan", category: "sonota",
    desc: "きんいろと みどりいろに ひかる うつくしい むしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Chrysochroa_fulgidissima_%28Tamamushi%29_In_Nature.PNG", license: "Public Domain", author: "Brian Adler", sourcePage: "https://commons.wikimedia.org/wiki/File:Chrysochroa_fulgidissima_(Tamamushi)_In_Nature.PNG" } },
  { id: "oo-suzumebachi", name: "オオスズメバチ", scientificName: "Vespa mandarinia", region: "japan", category: "hachi-ari",
    desc: "せかいで いちばん おおきい はちの なかまだよ。 きをつけてね。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Asian_giant_hornet%EF%BC%88Vespa_mandarinia%EF%BC%89%E3%82%AA%E3%82%AA%E3%82%B9%E3%82%BA%E3%83%A1%E3%83%90%E3%83%81.jpg", license: "CC BY 2.0", author: "Ken Ishigaki", sourcePage: "https://commons.wikimedia.org/wiki/File:Asian_giant_hornet%EF%BC%88Vespa_mandarinia%EF%BC%89%E3%82%AA%E3%82%AA%E3%82%B9%E3%82%BA%E3%83%A1%E3%83%90%E3%83%81.jpg" } },
  { id: "ashinaga-bachi", name: "アシナガバチ", scientificName: "Polistes chinensis", region: "japan", category: "hachi-ari",
    desc: "あしが ながい はちさんだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Polistes_chinensis_antennalis_%28cropped%29.jpg", license: "CC BY 2.0", author: "Opencage", sourcePage: "https://commons.wikimedia.org/wiki/File:Polistes_chinensis_antennalis_(cropped).jpg" } },
  { id: "shioya-abu", name: "シオヤアブ", scientificName: "Promachus yesonicus", region: "japan", category: "sonota",
    desc: "ほかの むしを つかまえる はやわざの むしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/3/38/Promachus-yesonicus_in_fukuoka.jpg", license: "CC BY-SA 4.0", author: "Textheavy", sourcePage: "https://commons.wikimedia.org/wiki/File:Promachus-yesonicus_in_fukuoka.jpg" } },
  { id: "nanafushi", name: "ナナフシ", scientificName: "Ramulus mikado", region: "japan", category: "sonota",
    desc: "きの えだに そっくりに へんしんする むしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Neohirasea_japonica1.jpg", license: "CC BY-SA 3.0", author: "KENPEI", sourcePage: "https://commons.wikimedia.org/wiki/File:Neohirasea_japonica1.jpg" } },
  { id: "hanmyou", name: "ハンミョウ", scientificName: "Cicindela chinensis", region: "japan", category: "sonota",
    desc: "きらきら ひかる いろとりどりの からだだよ。 みちを あんないする みたいに とぶよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Cicindela_japonica.JPG", license: "CC BY-SA 3.0", author: "Alpsdake", sourcePage: "https://commons.wikimedia.org/wiki/File:Cicindela_japonica.JPG" } },

  // ---- せかいの むし (region: "world") ----
  { id: "hercules-oo-kabuto", name: "ヘラクレスオオカブト", scientificName: "Dynastes hercules", region: "world", category: "kabuto-kuwagata",
    desc: "せかいで いちばん おおきい かぶとむしの なかまだよ。 ながい つのが かっこいい。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Dynastes_hercules_hercules01.JPG", license: "Public Domain", author: "Furry yui", sourcePage: "https://commons.wikimedia.org/wiki/File:Dynastes_hercules_hercules01.JPG" } },
  { id: "caucasus-oo-kabuto", name: "コーカサスオオカブト", scientificName: "Chalcosoma caucasus", region: "world", category: "kabuto-kuwagata",
    desc: "つのが みっつも ある おおきな かぶとむしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Chalcosoma_caucasus.JPG", license: "Public Domain", author: "Bugman95", sourcePage: "https://commons.wikimedia.org/wiki/File:Chalcosoma_caucasus.JPG" } },
  { id: "atlas-oo-kabuto", name: "アトラスオオカブト", scientificName: "Chalcosoma atlas", region: "world", category: "kabuto-kuwagata",
    desc: "からだが つやつや ひかる おおきい かぶとむしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Atlas_Beetle_%28wings_closed%29_-_Zachi_Evenor.jpg", license: "CC BY-SA 4.0", author: "MathKnight and Dr. Zachi Evenor", sourcePage: "https://commons.wikimedia.org/wiki/File:Atlas_Beetle_(wings_closed)_-_Zachi_Evenor.jpg" } },
  { id: "goliath-beetle", name: "ゴライアスオオツノハナムグリ", scientificName: "Goliathus cacicus", region: "world", category: "kabuto-kuwagata",
    desc: "せかいで いちばん おもい むしの ひとつだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Goliathus_cacicus.jpg", license: "CC BY-SA 3.0", author: "Olaf Leillinger", sourcePage: "https://commons.wikimedia.org/wiki/File:Goliathus_cacicus.jpg", fit: "contain" } },
  { id: "zou-kabuto", name: "ゾウカブト", scientificName: "Megasoma elephas", region: "world", category: "kabuto-kuwagata",
    desc: "ぞうさんみたいに おおきくて ちからもちの かぶとむしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Elephant_Beetle_Megasoma_elephas_Male_Side_2699px_edit.jpg", license: "GFDL 1.2", author: "Derek Ramsey (edited by Fir0002)", sourcePage: "https://commons.wikimedia.org/wiki/File:Elephant_Beetle_Megasoma_elephas_Male_Side_2699px_edit.jpg" } },
  { id: "titan-oo-usubakamikiri", name: "タイタンオオウスバカミキリ", scientificName: "Titanus giganteus", region: "world", category: "kabuto-kuwagata",
    desc: "からだの ながさが せかいいちの おおきな かみきりむしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Titan_beetle_%28Titanus_giganteus%29_found_by_Jean_NICOLAS_%2810331669783%29.jpg", license: "CC BY-SA 2.0", author: "Bernard DUPONT (from France)", sourcePage: "https://commons.wikimedia.org/wiki/File:Titan_beetle_(Titanus_giganteus)_found_by_Jean_NICOLAS_(10331669783).jpg" } },
  { id: "niji-iro-kuwagata", name: "ニジイロクワガタ", scientificName: "Phalacrognathus muelleri", region: "world", category: "kabuto-kuwagata",
    desc: "にじいろに ひかる とても きれいな くわがたむしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Phalacrognathus_muelleri.jpg", license: "CC BY-SA 2.5", author: "OpenCage (opencage.info)", sourcePage: "https://commons.wikimedia.org/wiki/File:Phalacrognathus_muelleri.jpg" } },
  { id: "ougon-oni-kuwagata", name: "オウゴンオニクワガタ", scientificName: "Allotopus rosenbergi", region: "world", category: "kabuto-kuwagata",
    desc: "きんいろの けが はえた めずらしい くわがたむしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Allotopus_rosenbergi.JPG", license: "Public Domain", author: "Furry yui", sourcePage: "https://commons.wikimedia.org/wiki/File:Allotopus_rosenbergi.JPG" } },
  { id: "morpho-chou", name: "モルフォチョウ", scientificName: "Morpho didius", region: "world", category: "chou-ga",
    desc: "はねが きらきら あおく ひかる うつくしい ちょうちょだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Morpho_didius_Male_Dos_MHNT.jpg", license: "CC BY-SA 4.0", author: "Didier Descouens", sourcePage: "https://commons.wikimedia.org/wiki/File:Morpho_didius_Male_Dos_MHNT.jpg" } },
  { id: "alexandra-toribane-ageha", name: "アレクサンドラトリバネアゲハ", scientificName: "Ornithoptera alexandrae", region: "world", category: "chou-ga",
    desc: "せかいで いちばん おおきい ちょうちょだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/MP_-_Ornithoptera_alexandrae_3.jpg", license: "CC BY-SA 2.5", author: "Mark Pellegrini (Raul654)", sourcePage: "https://commons.wikimedia.org/wiki/File:MP_-_Ornithoptera_alexandrae_3.jpg" } },
  { id: "nishiki-oo-tsubamega", name: "ニシキオオツバメガ", scientificName: "Chrysiridia rhipheus", region: "world", category: "chou-ga",
    desc: "にじいろに ひかる はねを もつ、うつくしい がの なかまだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chrysiridia_rhipheus-mada-alive%3Dvivant.jpg", license: "CC BY-SA 3.0", author: "Philstone", sourcePage: "https://commons.wikimedia.org/wiki/File:Chrysiridia_rhipheus-mada-alive=vivant.jpg" } },
  { id: "hana-kamakiri", name: "ハナカマキリ", scientificName: "Hymenopus coronatus", region: "world", category: "batta-kamakiri",
    desc: "おはなに そっくりな すがたで むしを まちぶせする かまきりだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Orchid_mantis_after_lunch_%288051009717%29.jpg", license: "CC BY-SA 2.0", author: "Pavel Kirillov", sourcePage: "https://commons.wikimedia.org/wiki/File:Orchid_mantis_after_lunch_(8051009717).jpg" } },
  { id: "konoha-mushi", name: "コノハムシ", scientificName: "Phyllium philippinicum", region: "world", category: "sonota",
    desc: "きの はっぱに そっくりに へんしんする むしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Phyllium_philippinicum_male.jpg", license: "Public Domain", author: "Drägüs", sourcePage: "https://commons.wikimedia.org/wiki/File:Phyllium_philippinicum_male.jpg" } },
  { id: "lantern-bug", name: "ランタンバグ", scientificName: "Fulgora laternaria", region: "world", category: "sonota",
    desc: "おおきくて ふしぎな かたちの あたまを もつ むしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Peanut_Bug_%28Fulgora_laternaria%29_%286766673085%29.jpg", license: "CC BY-SA 2.0", author: "Bernard DUPONT (from France)", sourcePage: "https://commons.wikimedia.org/wiki/File:Peanut_Bug_(Fulgora_laternaria)_(6766673085).jpg" } },
  { id: "gohon-zuno-kabuto", name: "ゴホンヅノカブト", scientificName: "Eupatorus gracilicornis", region: "world", category: "kabuto-kuwagata",
    desc: "あたまと むねに いつつの つのが ある めずらしい かぶとむしだよ。",
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Eupatorus_gracilicornis.jpg", license: "CC BY-SA 4.0", author: "Rushenb", sourcePage: "https://commons.wikimedia.org/wiki/File:Eupatorus_gracilicornis.jpg" } },
];

const CATEGORIES = [
  { id: "all", label: "ぜんぶ", emoji: "🐛", color: "linear-gradient(135deg,#ff9ecb,#b18cff)" },
  { id: "kabuto-kuwagata", label: "かぶと・くわがた", emoji: "🪲", color: "#8a5a3c" },
  { id: "chou-ga", label: "ちょう・が", emoji: "🦋", color: "#e0559e" },
  { id: "semi-tonbo", label: "せみ・とんぼ", emoji: "🎐", color: "#3eb6e0" },
  { id: "hachi-ari", label: "はち・あり", emoji: "🐝", color: "#f0b429" },
  { id: "batta-kamakiri", label: "ばった・かまきり", emoji: "🦗", color: "#55b35a" },
  { id: "mizu-no-mushi", label: "みずの むし", emoji: "💧", color: "#2bb3a3" },
  { id: "sonota", label: "そのほかの むし", emoji: "✨", color: "#9b7fd1" },
];

const todayCardEl = document.getElementById("todayCard");
const categoryTabsEl = document.getElementById("categoryTabs");
const cardsGridEl = document.getElementById("cardsGrid");
const cardsFavGridEl = document.getElementById("cardsFavGrid");
const favEmptyEl = document.getElementById("favEmpty");

const viewZukanEl = document.getElementById("view-zukan");
const viewQuizEl = document.getElementById("view-quiz");
const viewCountEl = document.getElementById("view-count");
const viewFavoritesEl = document.getElementById("view-favorites");
const navBtns = [...document.querySelectorAll(".nav-btn")];

const detailEl = document.getElementById("detail");
const detailIconEl = document.getElementById("detailIcon");
const detailNameEl = document.getElementById("detailName");
const detailRegionEl = document.getElementById("detailRegion");
const detailScientificEl = document.getElementById("detailScientific");
const detailDescEl = document.getElementById("detailDesc");
const closeBtn = document.getElementById("closeBtn");
const speakBtn = document.getElementById("speakBtn");
const favBtnEl = document.getElementById("favBtn");

const creditsBtnEl = document.getElementById("creditsBtn");
const creditsEl = document.getElementById("credits");
const creditsCloseBtn = document.getElementById("creditsCloseBtn");
const creditsListEl = document.getElementById("creditsList");

const quizBadgeEl = document.getElementById("quizBadge");
const quizProgressEl = document.getElementById("quizProgress");
const quizRestartBtnEl = document.getElementById("quizRestartBtn");
const quizQuestionEl = document.getElementById("quizQuestion");
const quizChoicesEl = document.getElementById("quizChoices");
const quizFeedbackEl = document.getElementById("quizFeedback");
const quizResetProgressBtnEl = document.getElementById("quizResetProgressBtn");
const quizResetConfirmEl = document.getElementById("quizResetConfirm");
const quizResetConfirmYesEl = document.getElementById("quizResetConfirmYes");
const quizResetConfirmNoEl = document.getElementById("quizResetConfirmNo");

const countScoreEl = document.getElementById("countScore");
const countReplayBtnEl = document.getElementById("countReplayBtn");
const countStageEl = document.getElementById("countStage");
const countChoicesEl = document.getElementById("countChoices");
const countFeedbackEl = document.getElementById("countFeedback");

const offlineBtnEl = document.getElementById("offlineBtn");
const offlineStatusEl = document.getElementById("offlineStatus");

const PLACEHOLDER_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
    '<rect width="100" height="100" fill="#e8e8e8"/>' +
    '<text x="50" y="55" font-size="40" text-anchor="middle">🐛</text></svg>'
  );

// Wikimediaはホットリンクでのサムネイル生成幅を限定している(直接リクエストは
// 20/40/60/120/250/330/500/960/1280/1920/3840px 以外だと400エラーになる)。
// この一覧の中から用途に合う幅を選ぶこと。
const WIKIMEDIA_ALLOWED_WIDTHS = [20, 40, 60, 120, 250, 330, 500, 960, 1280, 1920, 3840];
function wikimediaThumbUrl(url, width) {
  const m = url.match(/^https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/([0-9a-f])\/([0-9a-f]{2})\/(.+)$/);
  if (!m) return url;
  const [, d1, d2, filename] = m;
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${d1}/${d2}/${filename}/${width}px-${filename}`;
}

// fitOverride: 丸く切り抜くかぞえてみようのように、データ側の fit ではなく
// 呼び出し側で object-fit を決めたいときに指定する
function photoImg(insect, className, width, fitOverride) {
  const rawUrl = insect.image && insect.image.url ? insect.image.url : null;
  const fit = fitOverride || (insect.image && insect.image.fit ? insect.image.fit : "contain");
  if (!rawUrl) {
    return `<img src="${PLACEHOLDER_SVG}" alt="${insect.name}" class="${className}" style="object-fit: ${fit};" loading="lazy">`;
  }
  const src = wikimediaThumbUrl(rawUrl, width || 250);
  // サムネイル生成に失敗したら元画像(フル解像度)にフォールバックし、それも失敗したらプレースホルダーにする
  const onerror = `this.onerror=function(){this.src='${PLACEHOLDER_SVG}'};this.src='${rawUrl}'`;
  return `<img src="${src}" alt="${insect.name}" class="${className}" style="object-fit: ${fit};" loading="lazy" onerror="${onerror}">`;
}

function regionEmoji(insect) {
  return insect.region === "world" ? "🌎" : "🗾";
}
function regionLabel(insect) {
  return insect.region === "world" ? "🌎 せかいの むし" : "🗾 にほんの むし";
}

// ---- 状態の保存(できた・おきにいり・くいずクリア) ----
function loadSet(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}
function saveSet(key, set) {
  try {
    localStorage.setItem(key, JSON.stringify([...set]));
  } catch {
    /* localStorageが使えない環境では何もしない */
  }
}

const seenSet = loadSet("zukan_seen");
const favSet = loadSet("zukan_favorites");
const quizClearedSet = loadSet("zukan_quiz_cleared");

let currentCategory = "all";
let currentView = "zukan";
let currentDetailInsect = null;
let currentAudio = null;

function filteredInsects() {
  return currentCategory === "all" ? INSECTS : INSECTS.filter((i) => i.category === currentCategory);
}
function favoriteInsects() {
  return INSECTS.filter((i) => favSet.has(i.id));
}

// ---- きょうの むし ----
function renderTodayCard() {
  const startOfYear = new Date(new Date().getFullYear(), 0, 0);
  const dayOfYear = Math.floor((Date.now() - startOfYear) / 86400000);
  const insect = INSECTS[dayOfYear % INSECTS.length];
  todayCardEl.dataset.id = insect.id;
  todayCardEl.innerHTML = `
    ${photoImg(insect, "today-photo", 120)}
    <div>
      <div class="today-label">★ きょうの むし ${regionEmoji(insect)}</div>
      <div class="today-name">${insect.name}</div>
      <div class="today-sub">タップして きいてみよう</div>
    </div>`;
}
todayCardEl.addEventListener("click", () => {
  const insect = INSECTS.find((i) => i.id === todayCardEl.dataset.id);
  if (insect) openDetail(insect);
});

// ---- カテゴリタブ ----
function renderCategoryTabs() {
  categoryTabsEl.innerHTML = CATEGORIES.map(
    (cat) => `
    <button class="category-tab ${cat.id === currentCategory ? "active" : ""}" data-cat="${cat.id}" style="background:${cat.color}">
      <span class="cat-emoji">${cat.emoji}</span><span>${cat.label}</span>
    </button>`
  ).join("");
}
categoryTabsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".category-tab");
  if (!btn) return;
  currentCategory = btn.dataset.cat;
  renderCategoryTabs();
  renderGrid(cardsGridEl, filteredInsects());
});

// ---- カードグリッド ----
function cardHTML(insect) {
  const seen = seenSet.has(insect.id);
  const fav = favSet.has(insect.id);
  return `
    <div class="card" data-id="${insect.id}">
      <div class="card-photo-wrap">
        ${seen ? '<div class="seen-badge">できた</div>' : ""}
        <button class="card-fav-btn ${fav ? "active" : ""}" data-fav-id="${insect.id}" aria-label="おきにいり">${fav ? "❤️" : "🤍"}</button>
        <div class="region-badge">${regionEmoji(insect)}</div>
        ${photoImg(insect, "card-photo", 250)}
      </div>
      <div class="card-name">${insect.name}</div>
    </div>`;
}
function renderGrid(container, list) {
  container.innerHTML = list.map(cardHTML).join("");
}
function setupGridDelegation(container) {
  container.addEventListener("click", (e) => {
    const favBtn = e.target.closest(".card-fav-btn");
    if (favBtn) {
      e.stopPropagation();
      toggleFavorite(favBtn.dataset.favId);
      return;
    }
    const card = e.target.closest(".card");
    if (card) {
      const insect = INSECTS.find((i) => i.id === card.dataset.id);
      if (insect) openDetail(insect);
    }
  });
}
setupGridDelegation(cardsGridEl);
setupGridDelegation(cardsFavGridEl);

function toggleFavorite(id) {
  if (favSet.has(id)) favSet.delete(id);
  else favSet.add(id);
  saveSet("zukan_favorites", favSet);
  renderGrid(cardsGridEl, filteredInsects());
  if (currentView === "favorites") renderFavorites();
  if (currentDetailInsect && currentDetailInsect.id === id) updateFavBtn();
}

function renderFavorites() {
  const list = favoriteInsects();
  renderGrid(cardsFavGridEl, list);
  favEmptyEl.hidden = list.length > 0;
}

// ---- 下部ナビ(ビュー切り替え) ----
const VIEWS = { zukan: viewZukanEl, quiz: viewQuizEl, count: viewCountEl, favorites: viewFavoritesEl };
function switchView(name) {
  currentView = name;
  stopAudio();
  Object.entries(VIEWS).forEach(([key, el]) => {
    el.hidden = key !== name;
  });
  navBtns.forEach((btn) => btn.classList.toggle("active", btn.dataset.view === name));
  if (name === "favorites") renderFavorites();
  if (name === "quiz") startQuiz();
  if (name === "count") startCountGame();
}
navBtns.forEach((btn) => btn.addEventListener("click", () => switchView(btn.dataset.view)));

// ---- 音声(VOICEVOX事前生成音声 → だめならブラウザ読み上げ) ----
function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}
function speakText(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ja-JP";
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
}
function speakQueued(text) {
  // speakText()と違い cancel() しない: 直前の発話のあとに続けて再生したいときに使う
  if (!("speechSynthesis" in window)) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ja-JP";
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
}
function playNameAudio(insect) {
  stopAudio();
  const audio = new Audio(`audio/name-${insect.id}.wav`);
  currentAudio = audio;
  audio.play().catch(() => speakText(insect.name));
}
function playDescAudio(insect) {
  stopAudio();
  const audio = new Audio(`audio/desc-${insect.id}.wav`);
  currentAudio = audio;
  audio.play().catch(() => speakText(insect.desc));
}
// 名前を読んだあとに続けて説明を読み上げる(詳細画面を開いたとき・よみあげボタン用)
function playNameThenDesc(insect) {
  stopAudio();
  const nameAudio = new Audio(`audio/name-${insect.id}.wav`);
  currentAudio = nameAudio;
  nameAudio.addEventListener("ended", () => {
    const descAudio = new Audio(`audio/desc-${insect.id}.wav`);
    currentAudio = descAudio;
    descAudio.play().catch(() => speakQueued(insect.desc));
  });
  nameAudio.play().catch(() => {
    speakText(insect.name);
    speakQueued(insect.desc);
  });
}
function playQuizAudio(url, fallbackText) {
  stopAudio();
  const audio = new Audio(url);
  currentAudio = audio;
  audio.play().catch(() => speakText(fallbackText));
}
// 「もういちど。」のあとに、問題文をもう一度読み上げる
function playQuizRetrySequence(insect) {
  stopAudio();
  const retryText = "もういちど。";
  const questionText = `${insect.name} は どれかな？`;
  const retryAudio = new Audio("audio/wrong-retry.wav");
  currentAudio = retryAudio;
  retryAudio.addEventListener("ended", () => {
    const qAudio = new Audio(`audio/quiz-${insect.id}.wav`);
    currentAudio = qAudio;
    qAudio.play().catch(() => speakQueued(questionText));
  });
  retryAudio.play().catch(() => {
    speakText(retryText);
    speakQueued(questionText);
  });
}

// 「てんとうむし」→「なんびき いるかな？」の順に読み上げる(かぞえてみよう用)
function playNameThenCountQuestion(insect) {
  stopAudio();
  const nameAudio = new Audio(`audio/name-${insect.id}.wav`);
  currentAudio = nameAudio;
  nameAudio.addEventListener("ended", () => {
    const qAudio = new Audio("audio/count-q.wav");
    currentAudio = qAudio;
    qAudio.play().catch(() => speakQueued(COUNT_QUESTION_TEXT));
  });
  nameAudio.play().catch(() => {
    speakText(insect.name);
    speakQueued(COUNT_QUESTION_TEXT);
  });
}

// ---- 詳細(フルスクリーン) ----
function updateFavBtn() {
  if (!currentDetailInsect) return;
  const isFav = favSet.has(currentDetailInsect.id);
  favBtnEl.classList.toggle("active", isFav);
  favBtnEl.textContent = isFav ? "❤️ おきにいり" : "🤍 おきにいり";
}
function openDetail(insect) {
  currentDetailInsect = insect;
  detailIconEl.innerHTML = photoImg(insect, "detail-photo", 500);
  detailNameEl.textContent = insect.name;
  detailRegionEl.textContent = regionLabel(insect);
  detailScientificEl.textContent = insect.scientificName || "";
  detailDescEl.textContent = insect.desc;
  updateFavBtn();
  detailEl.hidden = false;
  detailEl.scrollTop = 0;

  playNameThenDesc(insect);
}
function closeDetail() {
  detailEl.hidden = true;
  stopAudio();
}
closeBtn.addEventListener("click", closeDetail);
speakBtn.addEventListener("click", () => {
  if (currentDetailInsect) playNameThenDesc(currentDetailInsect);
});
detailIconEl.addEventListener("click", () => {
  if (currentDetailInsect) playNameAudio(currentDetailInsect);
});
detailDescEl.addEventListener("click", () => {
  if (currentDetailInsect) playDescAudio(currentDetailInsect);
});
favBtnEl.addEventListener("click", () => {
  if (!currentDetailInsect) return;
  toggleFavorite(currentDetailInsect.id);
});

// ---- しゃしんについて(クレジット) ----
function renderCredits() {
  creditsListEl.innerHTML = INSECTS.map((insect) => {
    if (!insect.image || !insect.image.url) {
      return `<div>${insect.name}: 写真じゅんびちゅう</div>`;
    }
    const { license, author, sourcePage } = insect.image;
    return `<div>${insect.name} — ${author || "unknown"} (${license || "license unknown"})${
      sourcePage ? ` <a href="${sourcePage}" target="_blank" rel="noopener">出典</a>` : ""
    }</div>`;
  }).join("");
}
creditsBtnEl.addEventListener("click", () => {
  renderCredits();
  creditsEl.hidden = false;
});
creditsCloseBtn.addEventListener("click", () => {
  creditsEl.hidden = true;
});
creditsEl.addEventListener("click", (e) => {
  if (e.target === creditsEl) creditsEl.hidden = true;
});

// ---- くいず ----
const CORRECT_PHRASES = ["せいかい！", "よくわかったね！", "すごいね！", "やったね！"];
const CONFETTI_COLORS = ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#ff8fab", "#c77dff"];

let quizCurrent = null;
let quizAnswered = false;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function updateQuizStatus() {
  const total = INSECTS.length;
  const clearedCount = INSECTS.filter((i) => quizClearedSet.has(i.id)).length;
  const remaining = total - clearedCount;
  const allCleared = remaining === 0;
  quizBadgeEl.hidden = !allCleared;
  quizProgressEl.hidden = allCleared;
  if (!allCleared) {
    quizProgressEl.textContent = `あと ${remaining}ひきで コンプリート（${clearedCount}/${total}）`;
  }
}
function triggerConfetti() {
  const container = document.createElement("div");
  container.className = "confetti-container";
  document.body.appendChild(container);
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    piece.style.animationDuration = `${1.6 + Math.random() * 1.2}s`;
    piece.style.animationDelay = `${Math.random() * 0.3}s`;
    piece.style.setProperty("--rot", `${Math.random() * 360}deg`);
    container.appendChild(piece);
  }
  setTimeout(() => container.remove(), 3200);
}
function startQuiz() {
  updateQuizStatus();
  nextQuizQuestion();
}
function nextQuizQuestion() {
  quizAnswered = false;
  quizFeedbackEl.hidden = true;
  const pool = INSECTS.filter((i) => !quizClearedSet.has(i.id));
  const source = pool.length > 0 ? pool : INSECTS;
  const correct = source[Math.floor(Math.random() * source.length)];
  const distractors = shuffle(INSECTS.filter((i) => i.id !== correct.id)).slice(0, 3);
  const choices = shuffle([correct, ...distractors]);
  quizCurrent = { correct, choices, attempt: 0 };
  quizQuestionEl.textContent = `${correct.name} は どれかな？`;
  quizChoicesEl.innerHTML = choices
    .map((insect) => `<button class="quiz-choice" data-id="${insect.id}">${photoImg(insect, "quiz-choice-img", 250)}</button>`)
    .join("");
  playQuizAudio(`audio/quiz-${correct.id}.wav`, `${correct.name} は どれかな？`);
}
function handleCorrectAnswer(btn) {
  quizAnswered = true;
  btn.classList.add("correct");
  [...quizChoicesEl.children].forEach((child) => (child.disabled = true));

  const phraseIndex = Math.floor(Math.random() * CORRECT_PHRASES.length);
  const phrase = CORRECT_PHRASES[phraseIndex];
  quizFeedbackEl.hidden = false;
  quizFeedbackEl.textContent = `🎉 ${phrase}`;
  quizFeedbackEl.className = "quiz-feedback correct";
  playQuizAudio(`audio/correct-${phraseIndex + 1}.wav`, phrase);
  triggerConfetti();

  seenSet.add(quizCurrent.correct.id);
  saveSet("zukan_seen", seenSet);
  quizClearedSet.add(quizCurrent.correct.id);
  saveSet("zukan_quiz_cleared", quizClearedSet);
  renderGrid(cardsGridEl, filteredInsects());
  updateQuizStatus();

  setTimeout(nextQuizQuestion, 1800);
}
function handleWrongAnswer(btn) {
  btn.classList.add("wrong");
  btn.disabled = true;

  if (quizCurrent.attempt === 0) {
    quizCurrent.attempt = 1;
    quizFeedbackEl.hidden = false;
    quizFeedbackEl.textContent = "もういちど。";
    quizFeedbackEl.className = "quiz-feedback wrong";
    playQuizRetrySequence(quizCurrent.correct);
    // quizAnswered のままfalse: もう一度だけ選び直せる
  } else {
    quizAnswered = true;
    [...quizChoicesEl.children].forEach((child) => {
      child.disabled = true;
      if (child.dataset.id === quizCurrent.correct.id) child.classList.add("correct");
    });
    quizFeedbackEl.hidden = false;
    quizFeedbackEl.textContent = `ざんねん、こたえは ${quizCurrent.correct.name} だよ`;
    quizFeedbackEl.className = "quiz-feedback wrong";
    setTimeout(nextQuizQuestion, 1800);
  }
}
quizChoicesEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".quiz-choice");
  if (!btn || btn.disabled || quizAnswered || !quizCurrent) return;
  const isCorrect = btn.dataset.id === quizCurrent.correct.id;
  if (isCorrect) handleCorrectAnswer(btn);
  else handleWrongAnswer(btn);
});
quizRestartBtnEl.addEventListener("click", () => {
  // 次の問題には進めず、いまの問題文を読み上げ直すだけ
  if (!quizCurrent) return;
  playQuizAudio(`audio/quiz-${quizCurrent.correct.id}.wav`, `${quizCurrent.correct.name} は どれかな？`);
});
quizResetProgressBtnEl.addEventListener("click", () => {
  quizResetConfirmEl.hidden = false;
});
quizResetConfirmNoEl.addEventListener("click", () => {
  quizResetConfirmEl.hidden = true;
});
quizResetConfirmEl.addEventListener("click", (e) => {
  if (e.target === quizResetConfirmEl) quizResetConfirmEl.hidden = true;
});
quizResetConfirmYesEl.addEventListener("click", () => {
  // 今の問題はそのまま: seen/favorites/quizClearedのみリセットする
  seenSet.clear();
  favSet.clear();
  quizClearedSet.clear();
  saveSet("zukan_seen", seenSet);
  saveSet("zukan_favorites", favSet);
  saveSet("zukan_quiz_cleared", quizClearedSet);
  renderGrid(cardsGridEl, filteredInsects());
  renderFavorites();
  updateQuizStatus();
  quizResetConfirmEl.hidden = true;
});

// ---- かぞえてみよう ----
// 1〜5匹の同じ虫を並べて「なんびき いるかな？」を当てるモード。
// 虫をタップすると「いち・に・さん…」と数えられる(数え上げの練習)。
const COUNT_MAX = 5;
const COUNT_QUESTION_TEXT = "なんびき いるかな？";
const COUNT_NUMBER_WORDS = ["いち", "に", "さん", "よん", "ご"];
const COUNT_ANSWER_WORDS = ["いっぴき", "にひき", "さんびき", "よんひき", "ごひき"];

// 写真に2匹以上写っている種(multiInPhoto)は、1枚=1匹として数えられないので出題しない
const COUNTABLE_INSECTS = INSECTS.filter((i) => !i.multiInPhoto);

let countCurrent = null;
let countScore = 0;

function renderCountScore() {
  countScoreEl.textContent = `せいかい ${countScore}こ`;
}
function countStageHTML(insect, total) {
  let html = "";
  for (let i = 0; i < total; i++) {
    // 少しだけ傾きをつけて、同じ写真の並びが単調に見えないようにする
    const rot = Math.round(Math.random() * 30 - 15);
    html += `<button class="count-bug" data-index="${i}" style="--rot:${rot}deg">${photoImg(insect, "count-bug-img", 250, "cover")}</button>`;
  }
  return html;
}
function startCountGame() {
  renderCountScore();
  nextCountRound();
}
function nextCountRound() {
  const insect = COUNTABLE_INSECTS[Math.floor(Math.random() * COUNTABLE_INSECTS.length)];
  const total = 1 + Math.floor(Math.random() * COUNT_MAX);
  countCurrent = { insect, total, answered: false, attempt: 0, tapped: 0 };

  countFeedbackEl.hidden = true;
  countStageEl.innerHTML = countStageHTML(insect, total);
  countChoicesEl.innerHTML = Array.from(
    { length: COUNT_MAX },
    (_, i) => `<button class="count-choice" data-num="${i + 1}">${i + 1}</button>`
  ).join("");

  playNameThenCountQuestion(insect);
}
// 虫をタップ: 押した順に番号シールを付けて「いち・に・さん…」と読み上げる
countStageEl.addEventListener("click", (e) => {
  const bug = e.target.closest(".count-bug");
  if (!bug || !countCurrent || bug.classList.contains("tapped")) return;
  countCurrent.tapped += 1;
  const n = countCurrent.tapped;
  bug.classList.add("tapped");
  bug.insertAdjacentHTML("beforeend", `<span class="count-num-badge">${n}</span>`);
  playQuizAudio(`audio/count-${n}.wav`, COUNT_NUMBER_WORDS[n - 1]);
});
function handleCountCorrect(btn) {
  countCurrent.answered = true;
  btn.classList.add("correct");
  [...countChoicesEl.children].forEach((child) => (child.disabled = true));

  const phraseIndex = Math.floor(Math.random() * CORRECT_PHRASES.length);
  countFeedbackEl.hidden = false;
  countFeedbackEl.textContent = `🎉 ${CORRECT_PHRASES[phraseIndex]} ${COUNT_ANSWER_WORDS[countCurrent.total - 1]}！`;
  countFeedbackEl.className = "quiz-feedback correct";
  playQuizAudio(`audio/correct-${phraseIndex + 1}.wav`, CORRECT_PHRASES[phraseIndex]);
  triggerConfetti();

  countScore += 1;
  renderCountScore();
  setTimeout(nextCountRound, 2000);
}
function handleCountWrong(btn) {
  btn.classList.add("wrong");
  btn.disabled = true;

  if (countCurrent.attempt === 0) {
    // くいずと同じく、まちがえても1回だけやり直せる
    countCurrent.attempt = 1;
    countFeedbackEl.hidden = false;
    countFeedbackEl.textContent = "もういちど かぞえてみよう。";
    countFeedbackEl.className = "quiz-feedback wrong";
    playQuizAudio("audio/wrong-retry.wav", "もういちど。");
  } else {
    countCurrent.answered = true;
    [...countChoicesEl.children].forEach((child) => {
      child.disabled = true;
      if (Number(child.dataset.num) === countCurrent.total) child.classList.add("correct");
    });
    countFeedbackEl.hidden = false;
    countFeedbackEl.textContent = `ざんねん、${COUNT_ANSWER_WORDS[countCurrent.total - 1]} だよ`;
    countFeedbackEl.className = "quiz-feedback wrong";
    setTimeout(nextCountRound, 2200);
  }
}
countChoicesEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".count-choice");
  if (!btn || btn.disabled || !countCurrent || countCurrent.answered) return;
  if (Number(btn.dataset.num) === countCurrent.total) handleCountCorrect(btn);
  else handleCountWrong(btn);
});
countReplayBtnEl.addEventListener("click", () => {
  // 次の問題には進めず、いまの虫の名前と問題文を読み上げ直すだけ
  if (countCurrent) playNameThenCountQuestion(countCurrent.insect);
});

// ---- オフライン対応(Service Worker + まとめてダウンロード) ----
// キャッシュ名は sw.js の ASSET_CACHE と必ず合わせること
const ASSET_CACHE_NAME = "konchu-zukan-assets-v1";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      /* file:// で開いた場合など、登録できない環境では何もしない */
    });
  });
}

function offlineAssetUrls() {
  const urls = ["audio/wrong-retry.wav", "audio/count-q.wav"];
  for (let i = 1; i <= 4; i++) urls.push(`audio/correct-${i}.wav`);
  for (let i = 1; i <= COUNT_MAX; i++) urls.push(`audio/count-${i}.wav`);
  INSECTS.forEach((insect) => {
    urls.push(`audio/name-${insect.id}.wav`, `audio/desc-${insect.id}.wav`, `audio/quiz-${insect.id}.wav`);
    const raw = insect.image && insect.image.url;
    // 表示に使う3サイズ(きょうの虫120/カード・クイズ250/詳細500)をそろえて入れておく
    if (raw) [120, 250, 500].forEach((w) => urls.push(wikimediaThumbUrl(raw, w)));
  });
  return urls;
}

async function cacheAllAssets() {
  const cache = await caches.open(ASSET_CACHE_NAME);
  const urls = offlineAssetUrls();
  let done = 0;
  let failed = 0;
  const queue = [...urls];

  async function worker() {
    while (queue.length > 0) {
      const url = queue.shift();
      try {
        if (!(await cache.match(url))) await cache.add(url);
      } catch {
        failed += 1; // 1つ失敗しても続ける(その分はオンライン時に取得される)
      }
      done += 1;
      offlineStatusEl.textContent = `ダウンロードちゅう… ${done} / ${urls.length}`;
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker));
  return { total: urls.length, failed };
}

offlineBtnEl.addEventListener("click", async () => {
  if (!("caches" in window)) {
    offlineStatusEl.hidden = false;
    offlineStatusEl.textContent = "このブラウザでは オフライン保存が つかえません。";
    return;
  }
  offlineBtnEl.disabled = true;
  offlineStatusEl.hidden = false;
  offlineStatusEl.textContent = "じゅんびちゅう…";
  try {
    const { total, failed } = await cacheAllAssets();
    offlineStatusEl.textContent =
      failed > 0
        ? `${total - failed} / ${total} こ ほぞんしました(${failed}こは しっぱい)。`
        : "✅ ぜんぶ ほぞんしました。でんぱが なくても あそべます。";
  } catch {
    offlineStatusEl.textContent = "ほぞんに しっぱいしました。もういちど ためしてください。";
  }
  offlineBtnEl.disabled = false;
});

// ---- 初期表示 ----
renderTodayCard();
renderCategoryTabs();
renderGrid(cardsGridEl, filteredInsects());
