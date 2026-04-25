const WHATSAPP_NUMBER = "919876543210"; // Replace with official WhatsApp number, country code only, no + sign.
const navToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if(navToggle){navToggle.addEventListener('click',()=>navLinks.classList.toggle('open'))}

function openWhatsapp(message){
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
}

const waButton = document.querySelector('.wa-button');
const waChat = document.querySelector('.wa-chat');
if(waButton && waChat){waButton.addEventListener('click',()=>waChat.classList.toggle('open'))}
document.querySelectorAll('[data-wa]').forEach(btn=>btn.addEventListener('click',()=>openWhatsapp(btn.dataset.wa)));

const leadForm = document.querySelector('#leadForm');
if(leadForm){
  leadForm.addEventListener('submit', function(e){
    e.preventDefault();
    const data = Object.fromEntries(new FormData(leadForm).entries());
    const msg = `New Huma Qureshi website enquiry%0A\nName: ${data.name || ''}\nEmail: ${data.email || ''}\nPhone: ${data.phone || ''}\nCompany/Agency: ${data.company || ''}\nEnquiry Type: ${data.type || ''}\nSubject: ${data.subject || ''}\nBudget: ${data.budget || ''}\nPreferred Contact: ${data.contactMethod || ''}\nDetails: ${data.details || ''}`;
    openWhatsapp(msg.replaceAll('%0A',''));
  });
}
