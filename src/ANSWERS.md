v-model yordamida form elementlarining qiymati avtomatik ravishda Vue komponentning ma'lumotlariga bog'lanadi.
Bu orqali ikki tomonlama malumot uzatish amalga oshiriladi.
<input v-model="name" placeholder="Ismingizni kiriting">

<p>Sizning ismingiz: {{ name }}</p>
data() {

    return {
      name: 'Jakhangir'
    }

}

Props — bu ota komponentdan bola komponentga malumot uzatish usuli. Props statik yoki dinamik qiymatni bola komponentga uzatadi.

Ota komponent qiymatni props orqali jo'natadi.
Bola komponent uni qabul qilib, foydalanadi.

Emits — bu bola komponentdan ota komponentga voqea uzatish uchun ishlatiladi. Bola komponentda emit yordamida hodisa (event) chaqiriladi va ota komponent uni tinglab, mos javobni beradi.

 <h3>Props: {{ message }}</h3>
    <button @click="sendMessage"></button>

      props: ['message'],

emits: ['sendMessage'],
methods: {
sendMessage() {

      this.$emit('sendMessage', ' salom!');
    },

},

parentcomponent
<ChildComponent
:name="childName"
@my-event="handleEvent"
/>

components: {
ChildComponent
},
data() {
return {
childName: 'Ali'
};
},
methods: {
handleEvent(message) {
alert('Salom' + message);
}
}

Teleport
Teleport — bu Vue.js’da ishlatiladigan kuchli xususiyat bo‘lib, u komponentdagi ma'lum bir qism (element)ni HTML hujjatining boshqa joyiga "ko‘chirish" imkonini beradi. Bu asosan modal oynalar, bildirishnomalar yoki biron bir global joyda ko‘rinishi kerak bo‘lgan elementlar uchun ishlatiladi.
Modal oynalar
Dropdown menu

Vue Lifecycle Hooks - bu vue komponentining turli bosqichlarini kuzatish va boshqarish imkonini beruvchi maxsus funksiyalar. Komponent yaratilishi, yangilanishi va yo‘q qilinishi kabi bosqichlarda ishlatiladi.
