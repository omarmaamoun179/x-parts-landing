// Minimal interactions + i18n toggle (AR/EN)
const yEl = document.getElementById('y'); if (yEl) yEl.textContent = new Date().getFullYear();

function onSearch(){
  const v = (document.getElementById('plate')?.value || '').trim();
  if(!v){ alert('من فضلك أدخل VIN أو رقم اللوحة'); return; }
  alert('بحث مبدئي عن: ' + v + '\nهذه نسخة تسويقية — اربطه بواجهة البحث لاحقًا.');
}

// Simple AR/EN toggle (content swapped for key strings). In real app, use i18n files.
const langToggle = document.getElementById('langToggle');
const dict = {
  en: {
    title: 'Search, compare & buy car parts easily',
    cta: 'Start free',
    searchPlaceholder: 'Enter VIN or plate number'
  },
  ar: {
    title: 'ابحث، قارن، واشتري قطع غيار السيارات بسهولة',
    cta: 'ابدأ مجانًا',
    searchPlaceholder: 'أدخل VIN أو رقم اللوحة'
  }
};
let current = 'ar';
langToggle?.addEventListener('click', () => {
  current = current === 'ar' ? 'en' : 'ar';
  document.documentElement.lang = current === 'ar' ? 'ar' : 'en';
  document.documentElement.dir = current === 'ar' ? 'rtl' : 'ltr';
  langToggle.textContent = current === 'ar' ? 'EN' : 'AR';
  // minimal swaps
  const h1 = document.querySelector('.hero-copy h1');
  const cta = document.querySelector('.cta-inner a.btn');
  const input = document.getElementById('plate');
  if(h1) h1.textContent = dict[current].title;
  if(cta) cta.textContent = dict[current].cta;
  if(input) input.placeholder = dict[current].searchPlaceholder;
});
