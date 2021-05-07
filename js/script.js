document.addEventListener("DOMContentLoaded", getLocalLang);

var arrLang = {
  'en': {
    'about': 'About the Mars',
    'about-paragraph': 'Find out information about the planet, about its features and why exactly it.',
    'button': 'Learn more',
    'problems': 'Main Problems',
    'problems-paragraph': 'Explore the main problems of the project, especially the issue of atmosphere and terraforming.',
    'goal': 'Goal is Close',
    'goal-paragraph': 'Create a preliminary request for a trip to Mars and get its cost!',
    'aeronautics': 'Aeronautics',
    'aeronautics-paragraph': 'Aeronautics is a complex science. For safe and comfortable flights, we have studied it and invite you to familiarize yourself with our developments and ships.',
    'base': 'Base on Mars',
    'base-paragraph': 'We think you understand that flying constantly from Earth to Mars is illogical and expensive, so we are creating a base on Mars until 2030. We invite you to familiarize yourself with our plans.',
    'astronauts': 'Astronauts',
    'astronauts-paragraph': 'Astronauts are our heroes. It is they who sacrifice health, and sometimes life, in order for humanity to continue to live. You can become one too, even if you are a teacher or a housewife.',
    'footer-contact': 'contact',
    'footer-privacy': 'privacy',
    'footer-office': 'office',
    'footer-reports': 'reports',
    'contact-page-title': 'Contact',
    'contact-us': 'Contact Us',
    'contact-us-paragraph': 'Have any questions? We`d love to hear them from you.',
    'contact-item-paragraph': 'Our company is open to suggestions and criticism. Write to us, call or come to our office.',
    'contact-item-adress': 'Kennedy Space Center Complex, Space Commerce Way, Merritt Island, FL 32953',
    'privacy-page-title': 'Privacy Policy',
    'privacy': 'Privacy Policy',
    'privacy-paragraph': 'Before working with our website and company, be sure to read our privacy policy.',
    'office-page-title': 'Office',
    'office': 'Our office',
    'office-paragraph': 'Our office is the place where you are always welcome. Visit us and see our work!',
    'reports-page-title': 'Reports',
    'reports': 'Our Reports',
    'reports-paragraph': 'We are an open company. We always provide all reports on our flights and activities.',
    'card-1': 'Juno Solves 39-Year Old Mystery of Jupiter Lightning',
    'card-2': 'Engineers Solve Excessive Heat Removal from NASA’s Webb Telescope',
    'card-3': 'NASA Finds Ancient Organic Material, Mysterious Methane on Mars',
    'card-4': 'NASA to Host Live Discussion on New Mars Science Results',
    'card-5': '20 Years of Earth Data Now at Your Fingertips',
    'card-6': 'Astronomers Spot a Distant and Lonely Neutron Star',
    'card-7': 'Astronauts Safely in Orbit Following Launch to International Space Station',
    'card-8': 'As Solar Wind Blows, Our Heliosphere Balloons',
    'card-9': 'Tiny Asteroid Discovered Saturday Disintegrates Hours Later Over Southern Africa',
    'about-page-title': 'About Mars',
    'about-mars': 'About Mars',
    'about-mars-paragraph': 'Mars is a very interesting planet. We invite you to get to know her.',
    'nav-overview': 'Overview',
    'nav-in-depth': 'In Depth',
    'nav-galleries': 'Galleries',
    'overview-paragraph-1': 'Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.',
    'overview-paragraph-2': "Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. Two NASA rovers and one lander are currently exploring the surface of Mars (and a Chinese lander is set to land later this year). An international fleet of eight orbiters are studying the Red Planet from above.",
    'overview-paragraph-3': 'These robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.',
    'overview-paragraph-4': "NASA's next-generation Perseverance rover – the largest, most advanced rover NASA has sent to another world – touched down on Mars on Feb. 18, 2021, after a 203-day journey traversing 293 million miles (472 million kilometers). Confirmation of the successful touchdown was announced in mission control at NASA’s Jet Propulsion Laboratory (JPL) at 3:55 p.m. EST (12:55 p.m. PST).",
    'overview-paragraph-5': 'Perseverance is one of three spacecraft that arrived at Mars in 2021. The Hope orbiter from the United Arab Emirates arrived on Feb. 9, 2021. China’s Tianwen-1 mission arrived on Feb. 10, 2021, and includes an orbiter, a lander, and a rover. Europa and India also have spacecraft studying Mars from orbit.',
    'things-title': '10 Need-to-Know Things About Mars',
    'things-title-1': 'Small Planet',
    'things-title-2': 'FOURTH ROCK',
    'things-title-3': 'LONGER DAYS',
    'things-title-4': 'RUGGED TERRAIN',
    'things-title-5': 'BRING A SPACESUIT',
    'things-title-6': 'TWO MOONS',
    'things-title-7': 'RINGLESS',
    'things-title-8': 'MANY MISSIONS',
    'things-title-9': 'TOUGH PLACE FOR LIFE',
    'things-title-10': 'RUSTY PLANET',
    'things-fact-1': 'If the Sun were as tall as a typical front door, Earth would be the size of a dime, and Mars would be about as big as an aspirin tablet.',
    'things-fact-2': 'Mars orbits our Sun, a star. Mars is the fourth planet from the Sun at an average distance of about 228 million km (142 million miles) or 1.52 AU.',
    'things-fact-3': 'One day on Mars takes a little over 24 hours. Mars makes a complete orbit around the Sun (a year in Martian time) in 687 Earth days.',
    'things-fact-4': 'Mars is a rocky planet. Its solid surface has been altered by volcanoes, impacts, winds, crustal movement and chemical reactions.',
    'things-fact-5': 'Mars has a thin atmosphere made up mostly of carbon dioxide (CO2), argon (Ar), nitrogen (N2), and a small amount of oxygen and water vapor.',
    'things-fact-6': 'Mars has two moons named Phobos and Deimos.',
    'things-fact-7': 'There are no rings around Mars.',
    'things-fact-8': 'Several missions have visited this planet, from flybys and orbiters to rovers on the surface.The first true Mars mission success was the Mariner 4 flyby in 1965.',
    'things-fact-9': "At this time, Mars' surface cannot support life as we know it. Current missions are determining Mars' past and future potential for life.",
    'things-fact-10': 'Mars is known as the Red Planet because iron minerals in the Martian soil oxidize, or rust, causing the soil and atmosphere to look red.',
    'calc-page-title': 'Calculate and Send',
    'calc': 'Calculate and Send',
    'calc-paragraph': 'Fill out the form, get the result and send us.',
    'form-name': 'Name, Surname',
    'form-tel': 'Mobile number',
    'form-help': "We'll never share your number with anyone else.",
    'form-pass': 'Number of passengers',
    'form-days': 'Number of days',
    'form-meal': 'Meals',
    'form-transfer': 'Transfer to base',
    'form-btn': 'Send',
    'modal-title': 'Success!',
    'modal-text': 'Congratulations, your application has been successfully submitted. Call you during the day and discuss the details!',

  },
  'ua': {
    'about': 'Про цю планету',
    'about-paragraph': 'Дізнайтеся інформацію про планету, про її особливості та чому саме вона. ',
    'button': 'Читай більше',
    'problems': 'Основні проблеми',
    'problems-paragraph': 'Дослідіть основні проблеми проекту, особливо питання атмосфери та тераформування.',
    'goal': 'Мета близько',
    'goal-paragraph': 'Створіть попередній запит на поїздку на Марс і отримайте її вартість!',
    'aeronautics': 'Аеронавтика',
    'aeronautics-paragraph': 'Аеронавтика - складна наука. Для безпечних та комфортних польотів ми вивчили ії та пропонуємо ознайомитись з нашими розробками та кораблями.',
    'base': 'База на Марсі',
    'base-paragraph': 'Ми вважаємо, що ви розумієте, що постійні польоти з Землі на Марс є нелогічними та дорогими, тому ми створюємо базу на Марсі до 2030 року. Ознайомтеся із нашими планами.',
    'astronauts': 'Астронавти',
    'astronauts-paragraph': 'Космонавти - наші герої. Вони жертвують здоров’ям, а іноді і життям, щоб людство продовжувало жити. Ти теж можеш ним стати, навіть якщо ти вчитель або домогосподарка.',
    'footer-contact': 'контакти',
    'footer-privacy': 'приватність',
    'footer-office': 'офіс',
    'footer-reports': 'звіти',
    'contact-page-title': 'Наші контакти',
    'contact-us': "Зв'яжіться з нами",
    'contact-us-paragraph': 'Є питання? Ми хотіли б почути їх від вас!',
    'contact-item-paragraph': 'Наша компанія відкрита для пропозицій та критики. Напишіть нам, зателефонуйте або приходьте до нас в офіс.',
    'contact-item-adress': 'Космічний комплекс імені Кеннеді, Спейс Коммерс Уєй, острів Мерріт, Флорида 32953',
    'privacy-page-title': 'Політика конфіденційності',
    'privacy': 'приватність',
    'privacy-paragraph': 'Перш ніж працювати з нашим веб-сайтом та компанією, обов’язково прочитайте нашу політику конфіденційності.',
    'office-page-title': 'Наш офіс',
    'office': 'Наш офіс',
    'office-paragraph': 'Наш офіс - це місце, де вам завжди раді. Завітайте до нас і побачьте нашу роботу!',
    'reports-page-title': 'Звіти',
    'reports': 'Наша звітність',
    'reports-paragraph': 'Ми - відкрита компанія. Ми завжди надаємо всі звіти про наші польоти та діяльність.',
    'card-1': 'Розгадуємо 39-річну таємницю блискавок Юпітера',
    'card-2': 'Інженери вирішують надмірне відведення тепла за допомогою телескопа Webb NASA',
    'card-3': 'NASA виявило на Марсі стародавній органічний матеріал - таємничий метан',
    'card-4': 'NASA проведе дискусію в прямому ефірі щодо результатів науки про Марс',
    'card-5': '20 земних років даних зараз у вас під рукою',
    'card-6': 'Астрономи помітили далеку і самотню нейтронну зірку',
    'card-7': 'Астронавти у безпеці на орбіті після запуску на Міжнародну космічну станцію',
    'card-8': 'Як віє сонячний вітер, наші кулі геліосфери',
    'card-9': 'Крихітний астероїд, виявлений у суботу, розпадається над Південною Африкою',
    'about-page-title': 'Про Марс',
    'about-mars': 'Про Марс',
    'about-mars-paragraph': 'Марс - це дуже цікава планета. Пропонуємо вам познайомитися з нею.',
    'nav-overview': 'Огляд',
    'nav-in-depth': 'Глибше',
    'nav-galleries': 'Галерея',
    'overview-paragraph-1': 'Марс - четверта планета від Сонця - запилений, холодний, пустельний світ з дуже тонкою атмосферою. Марс також є динамічною планетою з сезонами, полярними крижаними шапками, каньйонами, згаслими вулканами та свідченнями того, що він був ще більш активним у минулому.',
    'overview-paragraph-2': "Марс - одне з найбільш досліджуваних тіл у нашій Сонячній системі, і це єдина планета, куди ми відправили ровери, які блукають по чужорідному ландшафту. Два марсохода NASA і один посадковий апарат зараз вивчають поверхню Марса (а китайський посадковий апарат повинен висадитися пізніше цього року). Міжнародний парк з восьми орбітальниx апаратів вивчає Червону планету згори.",
    'overview-paragraph-3': 'Ці роботи-дослідники знайшли безліч доказів того, що Марс був набагато вологішим і теплішим, з більш щільною атмосферою, мільярди років тому.',
    'overview-paragraph-4': "Марсохід нового покоління Perseverance - найбільший та найдосконаліший марсохід, який NASA відправило в новий світ - приземлення було здійснено на Марсі 18 лютого 2021 року після 203-денної подорожі, марсохід пролетів 472 мільйони кілометрів. Підтвердження успішного приземлення було оголошено під час управління місією в Лабораторії реактивного руху NASA (JPL) о 15:55. EST (12:55 PST).",
    'overview-paragraph-5': "Perseverance - один із трьох космічних кораблів, які прибули на Марс в 2021 році. Космічний корабель Надія з Об'єднаних Арабських Еміратів прибув 9 лютого 2021 року. Китайська місія Тяньвен-1 прибула 10 лютого 2021 року і включає орбітальний апарат, посадковий апарат і ровер. У Європі та Індії також є космічні кораблі, які вивчають Марс з орбіти.",
    'things-title': '10 речей, які потрібно знати про Марс',
    'things-title-1': 'Маленька планета',
    'things-title-2': 'Четверта',
    'things-title-3': 'Довші дні',
    'things-title-4': 'Сувора місцевість',
    'things-title-5': 'Візьміть скафандр',
    'things-title-6': 'Два супутники',
    'things-title-7': 'Без кільця',
    'things-title-8': 'Багато місій',
    'things-title-9': 'Місце життя',
    'things-title-10': 'Планета іржі',
    'things-fact-1': 'Якби Сонце було таким же високим, як типові вхідні двері, Земля мала б розмір копійки, Марс був би приблизно такий же, як таблетка аспірину.',
    'things-fact-2': 'Марс обертається навколо нашого Сонця, зірки. Марс - четверта планета від Сонця на середній відстані близько 228 млн. Км',
    'things-fact-3': 'Один день на Марсі займає трохи більше 24 годин. Марс здійснює повний оборот навколо Сонця (рік за марсіанським часом) за 687 земних днів.',
    'things-fact-4': 'Марс - скеляста планета. Його тверда поверхня була змінена вулканами, ударами, вітрами, рухом кори та хімічними реакціями.',
    'things-fact-5': 'Марс має тонку атмосферу, що складається в основному з вуглекислого газу (CO2), аргону (Ar), азоту (N2), а також невеликої кількості кисню та водяної пари.',
    'things-fact-6': 'Марс має два супутники - Фобос і Деймос.',
    'things-fact-7': 'Навколо Марса немає кілець.',
    'things-fact-8': 'Багато місій відвідали цю планету - від літаків та орбітальних апаратів до роверів на поверхні. Першим справжнім успіхом місії на Марс став Mariner 4 у 1965 році.',
    'things-fact-9': "На даний час поверхня Марса не може підтримувати життя организмів, яким ми його знаємо. Поточні місії визначають минулий та майбутній потенціал життя Марса.",
    'things-fact-10': 'Марс відомий як Червона планета, оскільки мінерали заліза в марсіанському грунті окислюються та іржавіють, внаслідок чого грунт і атмосфера виглядають червоними.',
    'calc-page-title': 'Розрахуйте подорож',
    'calc': 'Розрахуйте подорож',
    'calc-paragraph': 'Заповніть форму, отримайте результат і відправте нам.',
    'form-name': "Прізвище та ім'я",
    'form-tel': 'Мобільний телефон',
    'form-help': "Ми ніколи не розповсюджуємо ваші номери з кимось іншим.",
    'form-pass': 'Кількість пасажирів',
    'form-days': 'Кількість днів',
    'form-meal': 'Харчування',
    'form-transfer': 'Трансфер до бази',
    'form-btn': 'Відправити',
    'modal-title': 'Успішно!',
    'modal-text': 'Вітаємо! Ваша заявка успішно подана. Ми передзвонимо вам протягом дня і обговорімо деталі!',
  }
}

  $(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');
      saveLocalLang(lang)
      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });



  
$(document).ready(function(){
    $("#ua").click(function(){
        $('.button').addClass('button-slide-lng-changed');
    });
     $("#en").click(function(){
        $('.button').removeClass('button-slide-lng-changed');
    });
     $("#ua").click(function(){
      $('.slider_text').addClass('slider-text-lng-changed-media');
    });
     $("#en").click(function(){
        $('.slider_text').removeClass('slider-text-lng-changed-media');
    });
     $("#ua").click(function(){
      $('.contact-text').addClass('contact-text-lng-changed-media');
    });
     $("#en").click(function(){
        $('.contact-text').removeClass('contact-text-lng-changed-media');
    });
    $("#ua").click(function(){
      $('.contact-pg').addClass('contact-pg-lng-changed-media');
    });
     $("#en").click(function(){
        $('.contact-pg').removeClass('contact-pg-lng-changed-media');
    });
      $("#ua").click(function(){
      $('.privacy-text').addClass('privacy-slide-text-lng-changed');
    });
     $("#en").click(function(){
        $('.privacy-text').removeClass('privacy-slide-text-lng-changed');
    });
      $("#ua").click(function(){
      $('.privacy-pg').addClass('privacy-pg-lng-changed');
    });
     $("#en").click(function(){
        $('.privacy-pg').removeClass('privacy-pg-lng-changed');
    });
      $("#ua").click(function(){
      $('.calc-form-text').addClass('calc-form-text-lng-changed');
    });
     $("#en").click(function(){
        $('.calc-form-text').removeClass('calc-form-text-lng-changed');
    });
      $("#ua").click(function(){
        $('#privacyModal').modal('show');
    });
     $("#en").click(function(){
      $('#privacyModal').modal('hide');
    });
      $("#btn").click(function(){
      $('#calcModal').modal('show');
      $("#myForm")[0].reset();
      document.getElementById("out").innerHTML="0.00 $";
    });
});

function saveLocalLang(language) {
  let langs
  if (localStorage.getItem('langs') === null) {
    langs = []
  }
  else {
    langs = JSON.parse(localStorage.getItem('langs'))
  }
  langs.push(language)
  localStorage.setItem('langs', JSON.stringify(langs))
}

function getLocalLang() {
  let langs
  if (localStorage.getItem('langs') === null) {
    langs = []
  } else {
    langs = JSON.parse(localStorage.getItem('langs'))
  }
  langs.forEach(function (language) {
    let lang = langs[langs.length - 1]
    setTimeout( () => {
     $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    }, 0)
  })
  var currentLang = langs[langs.length - 1];
    if (currentLang == 'ua') {
      $('.button').addClass('button-slide-lng-changed');
    } else if (currentLang == 'en') {
      $('.button').removeClass('button-slide-lng-changed');
    } 
    if (currentLang == 'ua') {
      $('.slider_text').addClass('slider-text-lng-changed-media');
    } else if (currentLang == 'en') {
      $('.slider_text').removeClass('slider-text-lng-changed-media');
    } 
    if (currentLang == 'ua') {
      $('.contact-text').addClass('contact-text-lng-changed-media');
    } else if (currentLang == 'en') {
      $('.contact-text').removeClass('contact-text-lng-changed-media');
    }
    if (currentLang == 'ua') {
      $('.contact-pg').addClass('contact-pg-lng-changed-media');
    } else if (currentLang == 'en') {
      $('.contact-pg').removeClass('contact-pg-lng-changed-media');
    } 
    if (currentLang == 'ua') {
      $('.privacy-text').addClass('privacy-slide-text-lng-changed');
    } else if (currentLang == 'en') {
      $('.privacy-text').removeClass('privacy-slide-text-lng-changed');
    } 
    if (currentLang == 'ua') {
      $('.privacy-pg').addClass('privacy-pg-lng-changed');
    } else if (currentLang == 'en') {
      $('.privacy-pg').removeClass('privacy-pg-lng-changed');
    }
    if (currentLang == 'ua') {
      $('.calc-form-text').addClass('calc-form-text-lng-changed');
    } else if (currentLang == 'en') {
      $('.calc-form-text').removeClass('calc-form-text-lng-changed');
    }
    if (currentLang == 'ua') {
      $(window).on('load', function() {
        $('#privacyModal').modal('show');
    });
    } else if (currentLang == 'en') {
          $(window).on('load', function() {
        $('#privacyModal').modal('hide');
    });
    }
}

var btn = document.querySelector('#btn'),
    out = document.querySelector('#out'),
    passengers = document.querySelector('#passengers'),
    days = document.querySelector('#days'),
    meal = document.querySelector('#flexCheckDefault'),
    transfer = document.querySelector('#flexCheckDefault2'),
    passenger = 5645,
    day = 3500;
  // Basic function  
$('#passengers, #days, #flexCheckDefault, #flexCheckDefault2').on('input', function(){
      if (meal.checked){ 
          meal.value = 2134; }
        else 
        {
          meal.value = 0;
      }
      if (transfer.checked){ 
          transfer.value = 321; }
        else 
        {
          transfer.value = 0;
      }
 
var sum = (passengers.value * passenger) + (days.value * day) + (passengers.value * transfer.value) + (passengers.value * meal.value)
      out.innerHTML = sum + ' $';

})


