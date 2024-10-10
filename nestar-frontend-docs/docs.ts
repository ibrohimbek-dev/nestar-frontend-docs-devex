const docs = () => {};

// =================================================================

// 2024-09-15
// 118th Lesson
//

// Darsimiz rejasi:
// 1) NextJS o'zi nima?
// 2) NextJS'ga daxldor routing tizimini o'rganamiz
// 3) NextJS'ga daxldor bo'lgan rendering tizimini batafsil tahlil etamiz

// ---------------------------------------------------

// NextJS => Bu frontend loyihamizni samaralik tashkillashtirish uchun ishlatiladigan framework.
// Biz nextJS'dan foydalanib bir vaqtni o'zida ham frontend va backend'ni qurishimiz mumkin. Lekin agar
// backend mantiqlari katta bo'ladigan bo'lsa, nextJS'dan foydalanib ham frontend va backend'ni qurish tavsiya etilmaydi.
// nextJS'dan foydalanib faqatgina frontend'ni o'zinigina qurish tavsiya etiladi.

// NextJS'da ikki xil routing tizimi mavjud:
// 1) File-Based Routing => Pages Directory (by default server-rendered)
// 2) App-Based Routing => App Directory (by default server & client)

// APP => server & client routing'larni, "use client" qo'yish orqalik, uni server emas client component qilishimiz mumkin
// Pages => '_' (underscore) bilan boshlangan _document.tsx component server-side rendering hisoblandi.
// Pages => "use server" qo'yish orqalik, componentni client emas, server side rendering qilish mumkin

// ---------------------------------------------------

// 118th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-15
// 119th Lesson
//

// Darsimiz rejasi:
// 1) Document va app private fayllari ustida mushohoda etamiz
// 2) Loyihamizning metadata'larini qutishni o'rganamiz
// 3) Loyihamizga material UI'ni integratsiyasini amalga oshiramiz
// 4) Layout'larni ya'ni header'larni hamda router tizimini joriy qilish mexanizimini o'rganamiz

// ---------------------------------------------------

// underscore '_' qo'yilgan fayl nomlari routing tizimiga yashirin hisoblanadi:

// http://localhost:3000/community => 2-0
// http://localhost:3000/_app => 404

// _document.tsx => To'liqligicha server-side rendering hisoblanadi

// nextJS'da client side rendering hisoblangan component'lar avval, o'zlarini server'da qurib
// keyin client'da ham shakllanib oladi.

// _app.tsx & _document.tsx => nextJS'ni o'ziga daxldor bo'lgan fayllardan hisoblanib ushbu fayllarni ichida
// bir qator vazifalarni amalga oshirish sun'iy maydon yasab beradi.

// _app.tsx orqalik global integration'larni amalga oshiramiz (burak => index.tsx)
// _document.tsx => To'liqligicha server-side rendering hisoblanib, bizga SEO'ni shakllantirishimiz va uni yaxshilashimiz uchun yordamga keladi.
// va _document.tsx ichida asosan bizning loyihamizga tegishlik bo'lgan metadata'larni integratsiyasini amalga oshiramiz.

// SEO => Searching Engine Optimization

// -------------------------------------------------------------

// Meta Data => Meta Data bu bizga o'zaro linklarni bir - birimiz bilan ma'lum bir platformalar orqalik ulashganimizda, shu linkga oid
// ma'lumotlarni, masalan, rasm, title, description va hokazolarni namoyon qilib beradi. Masalan, udemy linkini agar biz telegram orqalik ulashadigan
// bo'lsak, ushbu ulashilgan linkda biz shu linkga oid, rasm, desc, title va ma'lumolarni ko'rishimiz mumkin. Aynan mana shu holatga metadata deyiladi.

// <meta name="robots" content="index,follow"/> => Google searching engine'lar bilan ishlashi uchun qulay algorithm

// nestar loyihamizda styles uchun sass'dan foydalanamiz:
// sass => syntatically awesome style sheet

// screen hisoblanmagan barcha component'larni libs ichidagi components folder'ida saqlaymiz

// ---------------------------------------------------

// 119th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-20
// 120th Lesson
// SASS integratsiyasini amalga oshiramiz va Layout'larni publishing qilamiz

// Darsimiz rejasi:
// 1) SASS o'zi nima va u bizga qanday imkoniyatlarni taqdim etadi
// 2) SASS'ni loyihamizga o'rnatamiz
// 3) Layoutlarimiz Header va Footer publishingini amalga oshiramiz

// ---------------------------------------------------

// SASS => Syntactically Awesome Style Sheets
// SCSS => Sassy Cascading Style Sheets

// SASS => CSS'ni extension language'i hisoblanadi
// TypeScript => JavaScript'ni extension language'i hisoblanadi

// SASS fayllarini hosil qilish uchun, yangi ochilgan faylni nomi yakuni .scss yoki .sass bilan tugashi kerak

// SASS'da variable'larni dollar belgisidan ($) foydalanib hosil qilamiz
// SASS'da class name nesting tizimini hosil qila olamiz
// SASS'da mixin'lardan foydalana olamiz

// Nestar loyihamizda SCSS'dan foydalanamiz

// $font: 'Poppins', sans-serif; => dollar belgisi ($) orqalik font variable hosil qilindi

// ---------------------------------------------------

// 120th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-21
// 121th Lesson
// HomePage sahifasini publishing qilamiz

// Darsimiz rejasi:
// 1) SASS mantig'ini qayta mushohada etamiz
// 2) HomePage sahifamizni publish qilamiz

// ---------------------------------------------------

// ---------------------------------------------------

// 121th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-22
// 122th Lesson
// Products list sahifasini publishing qilamiz

// Darsimiz rejasi:
// 1) Products list sahifasini publishing qilamiz

// ---------------------------------------------------

// ---------------------------------------------------

// 122th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-25
// 123th Lesson
// Loyihamizning Mobile versiyasini hosil etamiz va GraphQL Apollo client
// connection'ni tashkil etamiz

// Darsimiz rejasi:
// 1) Nestar loyihamizning Mobile versiyasini quramiz
// 2) GrahpQL Apollo client orqalik backend'imizga connection'ni amalga oshiramiz
// 3) Apollo GraphQL client orqali Frontend'da getProperties API'ini test qilamiz

// ---------------------------------------------------

// ---------------------------------------------------

// 123th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-25
// 124th Lesson
// Nestar loyihamizning publishing'ini complex tahlil qilamiz

// Darsimiz rejasi:
// 1) Nestar loyihamizning publishing qismi va unda ishlatiladigan tool'larni tahlil etamiz
// 2) Loyihamizning GraphQL Apollo client tizimini tahlil etamiz
// 3) Loyihamizning member'lar uchun mo'jallangan Authentication jarayonini mushohada etamiz

// ---------------------------------------------------

// GrahpQL backend server'ga 3 xil ko'rinishda request'larni amalga oshirishimiz mumkin:
// 1) React Query orqalik (useQuery, useMutation)
// 2) Apollo Clinet'ning query & mutation mantiqlarini request tarzida amalga oshirishimiz mumkin
// 3) Axios orqalik ham GraphQL request mantiqlarini amalga oshirishimiz mumkin

// useQuery & useMutation hook'larini doim istalgan joyda ishlata olmaymiz. Va bunday vaziyatda
// Apollo Client orqalik instance olib, uning query & mutaion request mantiqlaridan foydalanishimiz mumkin

// Odatda ko'pincha, React Query oqalik GraphQL request'larni amalga oshirishimiz mumkin.

// makeVar => Reactive Variable'larni xosil qilib beradi.
// Reative variable'lar context mantig'i kabi bir xil ishlaydi

// useState => Current state va shu state'ni update qilish uchun function hosil qilib beradi

// useCallback => Agar o'zining dependencies'larida biror bir o'zgarish bo'lsagina momoized qilingan callback function qaytaradi
// Va muhim bo'lmagan child component'larni re-render bo'lishidan oldini oladi

// useMemo => Qachonki o'zining dependencies'lari o'zgargan vaqtida qayta hisoblab chiqilgan memoized qilingan qiymatni qaytaradi.
// va useMemo har bir render uchun juda ham katta hisob kitoblarni oldini olishda yordam beradi.

// ---------------------------------------------------

// 124th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-29
// 125th Lesson
// HomePage Screen Componentini develop jarayonini davom etamiz

// Darsimiz rejasi:
// 1) React-query'ni birga o'ranganamiz
// 2) useQuery hooki va unga daxldor bo'lgan option'larni tahlik etamiz
// 3) TrendProperties sectional componentini haqiqiy backend'dan olingan ma'lumotlar asosida tashkillaymiz

// ---------------------------------------------------

// React Query => Masalan biz ma'lumotlarni yaxshi cache'lar uchun m'lum bir API'dan fetch qilib uni background'da synxronozatsiya qiladigan
// loyiha ustida ishlayapmiz. Va biz ushbu loyihamizga, pagination, infinite loading va complex senariylarni ham integratsiya qilishim qilishimiz kerak.
// Yuqoirdagilarni hammasini manual qilib chiqish juda ko'plab resurs talab etadi va kodni boilerplate'ga olib keladi.

// Mana shunday vaziyatda bizgam React Query yordamga keladi. React Query bizni React va Next.js application'larimizda ma'lumotlarni update qilish,
// cache'lash, fetch qilish hook set'larini bilan ta'minlab beradi. Biz React Query orqalik ma'lumot'larni fetch qilgan vaqtimizda, natijalar local storage'ga saqlanadi.
// Bu degani, agar fetch qilingan data cache'langan data bilan bir xil bo'lsa, qayta API call'ni amalga oshirmay, cache'langan natijalarni uzatib beradi.

// ---------------------------------------------------

// npm i @tanstack/react-query

// TanStack Query => React'dagi, fetching, caching va asynchronous data'larni updating qilish hook'lari hisoblanadi

// TanStack package'ini REST, GraphQL, Promises va hokazo texnologiyalar bilan ishlatishimiz mumkin.
// Backend'dan chaqilgan ma'lumotlarni TanStack Auto Caching qilib Refetching

// Browser'imizning 4 xil xotirasi mavjud:
// 1) Local Storage
// 2) Session Storage
// 3) Cookie Storage
// 4) Cache Storage

// ---------------------------------------------------
// REDUX vs REACT QUERY
// Qachon biz Redux yokida React Query'ni ishlatishimiz kerak?

// Redux => Single Storage hisoblanadi va backend'dan chaqirilgan ma'lumotlarni Redux Artchitecture'ga joylagan edik.
// Va bizga slice & selector'lar yordamga kelgan kelgan. Biz Redux texnologiyasidan Burak loyihamizda faqatgina ma'lumotlarni
// saqlash uchungina ishlatganimiz yo'q, qo'shimcha ravishda, backendan kelgan ma'lumotlarni to'g'ri interface'da saqlanishini Redux
// architecture orqalik hosil qilgan edik. (validation)

// React Query => Borwser'imizning Cache Store bilan integratsiya bo'lgan holda ishga tushadigan qurilma hisoblanadi.
// React Query manti'gini hamma loyihda birdek ishlatish tavsiya etilmaydi. React Query texnologiyasini, qachonki backend'dan
// 100% aniq ma'lumot qabul qilish fazasi yaratilgan bo'lsagina ishlatish tavsiya etiladi. Chunki React Query backend'dan olingan ma'lumotlarni
// hech qanday tekshirishsiz to'g'ridan - to'g'ri cache'ga avtomik ravishda saqlaydigan ajoyib state management tool'lardan biri hisoblanadi.

// ---------------------------------------------------

// React Query texlogiyasini biz ikkilanmay Nestar loyihamizda ishlatishimiz mumkin, chunki Nestar backend bu mono-repo va mono-repo project'imizning
// default server'i bu GraphQL API backend server'i hisoblanadi. Biz bilamizki, GraphQL backend'da ishlatilganda dto'lar orqalik 100% to'g'ri ma'lumotlarni
// taqdim etadigan backend server'ni qurish imkoniyatini beradi

// ---------------------------------------------------

// Biz Nestar loyihamizda, @tanstack/react-query'larni to'g'ridan - to'g'ri ishlatmaymiz, aksincha bizni uni apollo-client'dan chaqirib olishimiz mumkin.

// ---------------------------------------------------
// loading: getPropertiesLoading => Backend'dan ma'lumotlar kirib kelyotganda qandaydir loading animatsiyalarini ko'rsatishimiz mumkin
// data: getPropertiesData => Backend'dan kirib kelgan data'ni saqlamoqdamiz
// error: getPropertiesError => Ushbu jarayonda biror bir error sodir bo'lsa error ustida mantiq yozishimiz mumkin
// refetch: getPropertiesRefetch => Ma'lumotlarni qayta fetch qilib beradi

// ---------------------------------------------------

// notifyOnNetworkStatusChange: true => Backend'dan kelgan ma'lumotlarni update qilish mantig'ini shunga asoslanib tuzamiz
// variables: { input: initialInput } => Serverga yuboriladigan input turlari
// onCompleted: (data: T) => {} => Backend'dan ma'lumot kelganda quyidagi qismda kelgan ma'lumotni saqlaymiz

// ---------------------------------------------------
// fetchPolicy: "cache-and-network" => Ma'lumotlarni backend'dan olib, ularni cache'ga saqlash politikasi mavjud.
// Va u quyidagi turlarni o'z ichiga qamrab oladi:

// "cache-first" | "network-only" | cache-and-network | "cache-only" | "no-cache" | "standby"

// 1) cache-first => Agar ma'lumot cache'ga saqlangan bo'lsa va biz fetch-policy'ni cache-first qilib qo'yadigan bo'lsak
// saqlangan ma'lumotni client'ga olib berib, backend'da request yubormas edi. Ya'ni bir marotaba backend'dan ma'lumot olib
// ma'lum bir vaqt davomida saqlanadi. cache-first ayrim joylarda ishlatiladi, lekin ko'p hollarda emas.

// 2) network-only => Biz web sahifamizga kirgan vaqtimizda, birinchi bo'lib client'ga ma'lumotlarni network'dan qabul uzatadi.
// Ya'ni cache'ga e'tiborini qaratmaydi. Lekin network'dan ma'lumotni olib cache'ga yozishni davom etadi.

// 3) cache-and-network => cache-first & network-only kombinatsiyasi, cache-and-network fetch policy'ni hosil etadi.
// Ya'ni bu har ikkalasidan iborat degan ma'noni beradi. Buning ishlash tarzi, birinchi web sahifa ochilgan vaqtida, cache'dagi ma'lumotni axtaradi,
// agar cache'da ma'lumotlar mavjud bo'lda, shu mavjud ma'lumotlarni client'ga taqdim etadi. Taqdim e'tib bo'lganidan so'ng, network'ga ham murojaat etadi.
// Network'dan kelgan ma'lumot qabul etiladi va cache hamda network'dan kelgan ma'lumotlar bir xil bo'lsa hech qanday mantiq amalga oshmaydi. Agar cache va
// network'dan kelgan ma'lumotlar bir - biridan farqli bo'lsa cache'dagi ma'lumotlarni eng yangi ma'lumotlarni o'zgartirib, network'dan kelgan ma'lumotlarni
// client'ga taqdim etadi.

// 4) cache-only => Bir marotaba backend'dan ma'lumot olib uni cache'ga saqlab client'ga uzatgan so'ng, qaytib backend'da request'ni amalga oshirmaydi.
// Faqat cache'dagi ma'lumotlar bilan kifoyalandi. Bunday mantiqni qachonki biz, database'ga juda ko'p murojaat qilib, database'ni bezovta qilishimiz kerak
// bo'lmagan vaqtlardagina ishlatiladi.

// 5) no-cache => Bizga backend'ga tez - tez request qilish mantig'i bilan amalga oshirilgan mantiqlardagina ishlatiladi va bu network-only'ga juda ham
// o'xshash mantiq hisoblanadi.

// 6) standby => Kutish holatidagi mantiq hisoblanadi.

// ---------------------------------------------------

// Biz eng ko'p ishlatidan fetch policy'larimiz:
// 1) cache-first
// 2) network-only
// 3) cache-and-network

// 125th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-29
// 126th Lesson
// HomePage Screen Componentini develop jarayonini yakunlaymiz

// Darsimiz rejasi:
// 1) PopularProperty, TrendProperties, TopAgents, TopProperties va CommunityBoard Sectional Componentlar'ning develop jarayonini yakunlaymiz
// 2) TopProperties va TrendProperties'ni like bosish jarayonini useMutation orqalik hosil qilamiz
// 3) HomePage Screen Component'ining Mobile versiyasini tashkil etamiz

// ---------------------------------------------------

// fetchPolicy: 'network-only', // Faqatgina network'dan ma'lumotlar qabul qilinadi va ushbu mantiqni takror va takror ishlatamiz

// ---------------------------------------------------

// 126th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-10-01
// 127th Lesson
// Property List Screen Componentining develop jarayonini yakunlaymiz

// Darsimiz rejasi:
// 1) Property List Screen Componentiga daxldor bo'lgan comlex Filter mantig'ini tahlil etamiz
// 2) Property List Screen Componentini backend'dan olingan haqiqiy ma'lumotlar asosida tashkillaymiz
// 3) Property List Screen Componentida property'larga like bosish mexanizmini joriy etamiz

// ---------------------------------------------------

// ---------------------------------------------------

// 127th shu yerda yakunlandi
// 수고 하셨습니다!

// 2024-10-02
// 128th Lesson
// Property Detail Screen Componentining develop jarayonini yakunlaymiz

// Darsimiz rejasi:
// 1) Tanlangan property va uning manzilida joylashgan jami property'larni ma'lumotini tashkillaymiz
// 2) Property'larimizga like bosish jarayonini hosil etamiz
// 3) Tanlangan property'imizga daxldor bo'lgan comment'lar tizimini joriy etamiz

// ---------------------------------------------------

// ---------------------------------------------------

// 128th shu yerda yakunlandi
// 수고 하셨습니다!

// 2024-10-03
// 129th Lesson
// Agent'larimizga daxldor bo'lgan Screen Component'larining develop jarayonini yakunlaymiz

// Darsimiz rejasi:
// 1) Agent List Screen Componentini develop qilamiz
// 2) Agent Detail Screen Component'ini develop jarayonini yakunlaymiz

// ---------------------------------------------------

// ---------------------------------------------------

// 129th shu yerda yakunlandi
// 수고 하셨습니다!

// 2024-10-03
// 130th Lesson
// Community ya'ni Jamiyatga daxldor bo'lgan Screen Componentlarining develop jarayonini yakunlaymiz

// Darsimiz rejasi:
// 1) BoardArticle List Screen Componentining develop jarayonini yakunlaymiz
// 2) BoardArticle Detail Screen Componentini develop jarayonini yakunlaymiz

// ---------------------------------------------------

// ---------------------------------------------------

// 130th shu yerda yakunlandi
// 수고 하셨습니다!

// 2024-10-05
// 131th Lesson
// MyPage Screen Componentining develop jarayonini davom etamiz

// Darsimiz rejasi:
// 1) AddProperty va MyProperty mantig'ini develop qilamiz
// 2) MyFavorite va RecentlyVisited mantiqlarini develop qilamiz
// 3) MyArticles va WriteArticle ya'ni yangi maqola hosil qilish mantig'ini develop qilamiz

// ---------------------------------------------------

// ---------------------------------------------------

// 131th shu yerda yakunlandi
// 수고 하셨습니다!

// 2024-10-06
// 132th Lesson
// MyPage va Member Page Screen Component'larining develop jarayonini yakunlaymiz

// Darsimiz rejasi:
// 1) MyProfile Sectional Componentining develop jarayonini yakunlaymiz
// 2) Member Followers va Followings Sectional Component'larining develop jarayonini tashkillaymiz

// ---------------------------------------------------

// ---------------------------------------------------

// 132th shu yerda yakunlandi
// 수고 하셨습니다!

// 2024-10-08
// 133th Lesson
// Adminka loyihamizning develop jarayonini yakunlaymiz

// Darsimiz rejasi:
// 1) Nestar GraphQL API backend serverimizda kichik o'zgarishlarni sodir etamiz
// 2) Adminkamizning member'larini boshqarish mexanizmini joriy etamiz
// 3) Client'imizda GraphQL Error'larini rendering qilishni tashkillaymiz
// 4) Adminkaning Property'larini boshqarish jarayonini tashkil etamiz
// 5) Adminkamizning BoardArticle'larini boshqarish jarayonini develop qilamiz

// ---------------------------------------------------

// CS => Ushbu qismni o'zimiz modification loyihasida tashkillaymiz

// ---------------------------------------------------

// 133th shu yerda yakunlandi
// 수고 하셨습니다!

// 2024-10-08
// 134th Lesson
// WebSocket va soddalashtirilgan Chatting tizimini develop qilamiz

// Darsimiz rejasi:
// 1) Frontend'imizda Chatting bilan bog'liq dizayn modification'ni amalga oshiramiz
// 2) Server'imizda soddalashtirilgan WebSocket hamda Chatting mexanizmini develop qilamiz
// 3) Frontend'imizda soddalashtirilgan WebSocket Client connection'ni amalga oshiramiz

// ---------------------------------------------------

// ---------------------------------------------------

// 134th shu yerda yakunlandi
// 수고 하셨습니다!

// 2024-10-10
// 135th Lesson
// WebSocket va Chatting tizimini develop jarayonini yakunlaymiz

// Darsimiz rejasi:
// 1) WebSocket Server'ini develop jarayonini yakunlaymiz
// 2) WebSocket Client mantig'ini develop jarayonini yakunlaymiz

// ---------------------------------------------------

// ---------------------------------------------------

// 135th shu yerda yakunlandi
// 수고 하셨습니다!
