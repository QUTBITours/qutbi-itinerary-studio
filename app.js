const sampleText = `🏔️ KASOL – TOSH TOUR PACKAGE 🏔️

Travel Date: 27th December 2026
Duration: 3 Nights / 4 Days
Pickup & Drop: Delhi – Delhi

Day 1 – 27th December | Arrival in Kasol
- Arrival in Kasol from Delhi by Volvo sleeper bus.
- Hotel check-in.
- Explore Kasol Market, Parvati River and nearby attractions.
- Dinner and overnight stay in Kasol.

Day 2 – 28th December | Kasol to Tosh
- Breakfast and hotel checkout.
- Proceed towards Tosh Village.
- Explore the beautiful mountain scenery and surroundings.
- Dinner and overnight stay in Tosh.

Day 3 – 29th December | Tosh Sightseeing
- Breakfast at the hotel.
- Enjoy sightseeing, nature walks and beautiful mountain views.
- Dinner and overnight stay in Tosh.

Day 4 – 30th December | Tosh to Kasol – Delhi
- Breakfast and checkout.
- Return to Kasol.
- Board the overnight Volvo sleeper bus to Delhi.

Day 5 – 31st December | Arrival in Delhi
- Arrival in Delhi.
- Tour concludes with wonderful memories.

PACKAGE COST
₹12,500/- Per Person

Package Inclusions:
- Delhi to Kasol Volvo sleeper bus.
- Kasol to Delhi Volvo sleeper bus.
- 1 Night hotel accommodation in Kasol.
- 2 Nights accommodation in Tosh.
- Daily breakfast and dinner.

Note: Local transfers and sightseeing transportation are subject to confirmation.`;

const photos = {
  kasol: { url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=88', credit: 'Photo: Shashank Hudkar · Unsplash' },
  tosh: { url: 'https://images.unsplash.com/photo-1612438214708-f428a707dd4e?auto=format&fit=crop&w=1600&q=88', credit: 'Photo: Aman Upadhyay · Unsplash' },
  parvati: { url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=88', credit: 'Photo: Nathan Dumlao · Unsplash' },
  kashmir: { url: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1600&q=88', credit: 'Photo: Kunal Kalra · Unsplash' },
  ladakh: { url: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&w=1600&q=88', credit: 'Photo: Anmol Arora · Unsplash' },
  kerala: { url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=88', credit: 'Photo: Abhishek Prasad · Unsplash' },
  domestic: { url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=88', credit: 'Photo: Sylwia Bartyzel · Unsplash' },
  dubai: { url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=88', credit: 'Photo: David Rodrigo · Unsplash' },
  singapore: { url: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=88', credit: 'Photo: Mike Enerio · Unsplash' },
  kazakhstan: { url: 'https://images.unsplash.com/photo-1535484930731-7b23d9b8b8c7?auto=format&fit=crop&w=1600&q=88', credit: 'Photo: Unsplash' },
  vietnam: { url: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=88', credit: 'Photo: Ammie Ngo · Unsplash' },
  mauritius: { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=88', credit: 'Photo: Sean Oulashin · Unsplash' },
  europe: { url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=88', credit: 'Photo: Benjamin Davies · Unsplash' },
  international: { url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=88', credit: 'Photo: Steven Lewis · Unsplash' }
};

const photoPools = {
  kasol: [photos.kasol, photos.tosh, photos.parvati],
  kashmir: [photos.kashmir, photos.ladakh, photos.kasol],
  ladakh: [photos.ladakh, photos.kashmir, photos.parvati],
  kerala: [photos.kerala, photos.mauritius, photos.domestic],
  domestic: [photos.domestic, photos.kashmir, photos.kasol, photos.kerala, photos.ladakh, photos.parvati],
  dubai: [photos.dubai, photos.international, photos.singapore],
  singapore: [photos.singapore, photos.dubai, photos.international],
  kazakhstan: [photos.kazakhstan, photos.ladakh, photos.international, photos.parvati],
  vietnam: [photos.vietnam, photos.kerala, photos.international, photos.singapore],
  mauritius: [photos.mauritius, photos.kerala, photos.international],
  europe: [photos.europe, photos.international, photos.singapore],
  international: [photos.international, photos.dubai, photos.singapore, photos.vietnam, photos.mauritius, photos.europe]
};

const packageThemes = {
  kashmir: { photo: 'kashmir', region: 'KASHMIR · INDIA', subtitle: 'A timeless journey through the valley of dreams' },
  himachal: { photo: 'kasol', region: 'HIMACHAL PRADESH · INDIA', subtitle: 'A refreshing escape into the Himalayas' },
  ladakh: { photo: 'ladakh', region: 'LEH–LADAKH · INDIA', subtitle: 'High passes, clear skies and unforgettable horizons' },
  kerala: { photo: 'kerala', region: 'KERALA · INDIA', subtitle: 'Backwaters, green hills and unhurried moments' },
  goa: { photo: 'mauritius', palette: 'domestic', region: 'GOA · INDIA', subtitle: 'Golden beaches, lively moments and a relaxed coastal escape' },
  rajasthan: { photo: 'domestic', palette: 'domestic', region: 'RAJASTHAN · INDIA', subtitle: 'Royal cities, desert stories and timeless hospitality' },
  uttarakhand: { photo: 'kasol', palette: 'himachal', region: 'UTTARAKHAND · INDIA', subtitle: 'Sacred towns, mountain air and peaceful Himalayan views' },
  sikkim: { photo: 'kashmir', palette: 'kashmir', region: 'SIKKIM · DARJEELING', subtitle: 'Tea gardens, monasteries and magnificent Himalayan scenery' },
  northeast: { photo: 'kerala', palette: 'kerala', region: 'NORTHEAST INDIA', subtitle: 'Green valleys, living cultures and remarkable landscapes' },
  andaman: { photo: 'mauritius', palette: 'mauritius', region: 'ANDAMAN ISLANDS · INDIA', subtitle: 'Clear water, island calm and unforgettable shores' },
  domestic: { photo: 'domestic', region: 'INCREDIBLE INDIA', subtitle: 'A thoughtfully designed journey across India' },
  dubai: { photo: 'dubai', region: 'DUBAI · UNITED ARAB EMIRATES', subtitle: 'Modern wonders, desert adventures and Arabian hospitality' },
  singapore: { photo: 'singapore', region: 'SINGAPORE', subtitle: 'A vibrant city escape filled with remarkable experiences' },
  kazakhstan: { photo: 'kazakhstan', region: 'KAZAKHSTAN', subtitle: 'Grand landscapes and a distinctive Central Asian journey' },
  vietnam: { photo: 'vietnam', region: 'VIETNAM', subtitle: 'Culture, cuisine and landscapes that stay with you' },
  mauritius: { photo: 'mauritius', region: 'MAURITIUS', subtitle: 'Turquoise waters and an effortless island escape' },
  turkey: { photo: 'europe', palette: 'europe', region: 'TURKEY', subtitle: 'Ancient stories, colourful bazaars and extraordinary landscapes' },
  thailand: { photo: 'mauritius', palette: 'mauritius', region: 'THAILAND', subtitle: 'Tropical shores, vibrant cities and warm hospitality' },
  bali: { photo: 'kerala', palette: 'kerala', region: 'BALI · INDONESIA', subtitle: 'Island traditions, lush landscapes and restorative escapes' },
  malaysia: { photo: 'singapore', palette: 'singapore', region: 'MALAYSIA', subtitle: 'Modern cities, tropical nature and diverse experiences' },
  'malaysia-singapore': { photo: 'singapore', palette: 'singapore', region: 'MALAYSIA · SINGAPORE', title: 'Malaysia & Singapore Package', route: 'Kuala Lumpur – Singapore', subtitle: 'Two destinations, one remarkable journey' },
  maldives: { photo: 'mauritius', palette: 'mauritius', region: 'MALDIVES', subtitle: 'Private-island calm and endless shades of blue' },
  srilanka: { photo: 'kerala', palette: 'kerala', region: 'SRI LANKA', subtitle: 'Tea country, wildlife, heritage and beautiful coastlines' },
  azerbaijan: { photo: 'kazakhstan', palette: 'kazakhstan', region: 'AZERBAIJAN', subtitle: 'A fascinating meeting point of old culture and new design' },
  georgia: { photo: 'kazakhstan', palette: 'kazakhstan', region: 'GEORGIA', subtitle: 'Mountain landscapes, historic towns and generous hospitality' },
  japan: { photo: 'singapore', palette: 'singapore', region: 'JAPAN', subtitle: 'Tradition, innovation and beautifully considered experiences' },
  europe: { photo: 'europe', region: 'LONDON · EUROPE', subtitle: 'Classic cities, timeless landmarks and elegant journeys' },
  international: { photo: 'international', region: 'INTERNATIONAL JOURNEY', subtitle: 'A world of remarkable experiences, planned for you' }
};

const $ = (id) => document.getElementById(id);
const sourceText = $('sourceText');
let toastTimer;
let currentPhotoKey = 'kasol';
let currentPhotoIndex = 0;
let failedPhotoAttempts = 0;

function clean(value) {
  return (value || '').replace(/[*_🏔️📅🌙🚌📍💰✅✨]/g, '').replace(/\\/g, '').trim();
}

function parseItinerary(text) {
  const normalized = text.replace(/\r/g, '').replace(/\\\s*(?=\n|$)/g, '').replace(/\u00a0/g, ' ');
  const field = (label) => clean((normalized.match(new RegExp(`${label}\\s*:\\s*([^\\n]+)`, 'i')) || [])[1]);
  const lines = normalized.split('\n').map(clean).filter(Boolean);
  const titleLine = lines.find(line => /(?:tour|holiday|honeymoon|travel)\s+package/i.test(line)) || lines.find(line => /package/i.test(line)) || 'Custom Tour Package';
  const dateRange = clean((normalized.match(/(\d{1,2}(?:st|nd|rd|th)?\s*[–—-]\s*\d{1,2}(?:st|nd|rd|th)?\s+[A-Za-z]+(?:\s+20\d{2})?)/i) || [])[1]);
  const durationMatch = clean((normalized.match(/(\d+\s*Nights?\s*\/\s*\d+\s*Days?)/i) || [])[1]);
  const totalPrice = normalized.match(/₹\s*[\d,]+\s*(?:\/-)?\s*total/i);
  const totalContext = /total\s+package\s+price[\s\S]{0,120}₹/i.test(normalized);
  const perPersonPrice = normalized.match(/₹\s*[\d,]+\s*(?:\/-)?\s*(?:per person|\/\s*person)/i);
  const anyPrice = normalized.match(/₹\s*[\d,]+/);
  const totalAudience = clean((normalized.match(/(?:₹\s*[\d,]+|total\s+package\s+price)[\s\S]{0,100}?((?:all\s+)?\d+\s+(?:guests|adults|persons?))/i) || [])[1]);
  const selectedPrice = totalPrice || perPersonPrice || anyPrice;
  const days = extractDays(normalized);
  const inclusionSection = normalized.match(/(?:Package Inclusions|Package includes|Inclusions|Cost includes|Tour includes)\s*:?\s*([\s\S]*?)(?=(?:\n|\s)(?:Payable separately|Exclusions?|Cost excludes|Package excludes|Note|Terms|If you prefer|QUTBI)\b|$)/i);
  const inclusions = inclusionSection ? extractList(inclusionSection[1]) : [];
  const payable = clean((normalized.match(/(?:Payable separately|Exclusions?|Cost excludes|Package excludes)\s*:\s*([^\n]+)/i) || [])[1]);
  const standardNote = clean((normalized.match(/Note\s*:\s*([^\n]+)/i) || [])[1]);
  const extraNight = lines.find(line => /^If you prefer/i.test(line));
  const notes = [payable && `Payable separately: ${payable}`, standardNote, extraNight].filter(Boolean).join(' ');
  const title = titleLine.replace(/\s*\|\s*Qutbi Tours.*$/i, '').replace(/\s*(?:TOUR|HOLIDAY|TRAVEL)\s+PACKAGE\s*/i, '').trim() || 'Custom';
  return {
    title,
    travelDate: field('Travel Date') || dateRange || inferTravelRange(days),
    duration: field('Duration') || durationMatch,
    route: field('Pickup & Drop') || inferRoute(days),
    price: selectedPrice ? (selectedPrice[0].match(/₹\s*[\d,]+/) || [''])[0].replace(/\s/g, '') : 'Price on request',
    priceQualifier: (totalPrice || totalContext) ? (totalAudience ? `Total for ${totalAudience}` : 'Total package') : 'Per person',
    days, inclusions, note: notes
  };
}

function extractDays(text) {
  const months = 'Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?';
  const dateStart = `\\d{1,2}(?:st|nd|rd|th)?\\s+(?:${months})(?:\\s+20\\d{2})?`;
  const hasNumberedDays = /Day\s*\d+\b/i.test(text);
  const nextHeading = hasNumberedDays ? 'Day\\s*\\d+\\s*(?:[–—:-]|\\|)' : `${dateStart}\\s*[–—-]`;
  let prepared = text.replace(new RegExp(`\\s+(?=${nextHeading})`, 'gi'), '\n');
  prepared = prepared.replace(/\s+(?=(?:PACKAGE COST|Package Inclusions|Package includes|Inclusions|Cost includes|Tour includes|Payable separately|Exclusions?|Cost excludes|Package excludes|Note|Terms)\b)/gi, '\n');
  const sectionStop = /^(?:PACKAGE COST|Package Inclusions|Package includes|Inclusions|Cost includes|Tour includes|Payable separately|Exclusions?|Cost excludes|Package excludes|Note|Terms)\b/i;
  const days = [];
  let active = null;

  for (const raw of prepared.split('\n')) {
    const line = clean(raw);
    if (!line) continue;
    if (sectionStop.test(line)) { active = null; continue; }

    const numbered = line.match(/^Day\s*(\d+)\s*(?:[–—:-]\s*)?(.*)$/i);
    const dated = line.match(new RegExp(`^(${dateStart})\\s*[–—-]\\s*([^:|]+)(?::|\\|)?\\s*(.*)$`, 'i'));
    if (numbered) {
      const parsed = parseNumberedHeading(numbered[2], months);
      active = { number: numbered[1], date: parsed.date, title: parsed.title || `Day ${numbered[1]}`, bullets: parsed.details };
      days.push(active);
    } else if (dated) {
      active = { number: String(days.length + 1), date: clean(dated[1]), title: clean(dated[2]), bullets: splitDetails(clean(dated[3])) };
      days.push(active);
    } else if (active && /^[-•▪◦✓]/.test(line)) {
      active.bullets.push(line.replace(/^[-•▪◦✓]\s*/, ''));
    } else if (active && !/^(?:Travel Date|Duration|Pickup|Price|₹)/i.test(line)) {
      active.bullets.push(...splitDetails(line));
    }
  }

  if (!days.length) {
    const content = text.split(/(?:Package Inclusions|Package includes|Inclusions|Cost includes|Payable separately|Exclusions?|Note)\s*:?/i)[0];
    const overview = splitDetails(clean(content)).filter(item => !/(?:tour package|travel date|duration|pickup|₹)/i.test(item));
    days.push({ number: '1', date: 'As scheduled', title: 'Trip Overview', bullets: overview.length ? overview.slice(0, 10) : ['Itinerary details as provided by your Qutbi travel consultant.'] });
  }
  return days;
}

function parseNumberedHeading(value, months) {
  const line = clean(value);
  const datePattern = new RegExp(`^(\\d{1,2}(?:st|nd|rd|th)?\\s+(?:${months})(?:\\s+20\\d{2})?)\\s*(?:\\||[–—-])?\\s*(.*)$`, 'i');
  const dated = line.match(datePattern);
  const remainder = dated ? dated[2] : line;
  const parts = remainder.split(/\s*\|\s*|:\s+/, 2);
  let title = clean(parts[0]) || 'Planned experiences';
  let detailsText = parts.length > 1 ? remainder.slice(remainder.indexOf(parts[1])) : '';
  if (/\.\s+/.test(title)) {
    const firstStop = title.indexOf('. ');
    const trailingTitleText = title.slice(firstStop + 2);
    title = title.slice(0, firstStop);
    detailsText = [trailingTitleText, detailsText].filter(Boolean).join('. ');
  }
  return { date: dated ? clean(dated[1]) : '', title, details: splitDetails(detailsText) };
}

function extractList(value) {
  const lines = value.split(/\n|(?=[•▪◦✓])/).map(clean).filter(Boolean);
  const bullets = lines.filter(line => /^[-•▪◦✓]/.test(line)).map(line => line.replace(/^[-•▪◦✓]\s*/, ''));
  if (bullets.length) return bullets;
  return value.split(/\s*[;•]\s*|(?<=[.!?])\s+/).map(clean).filter(Boolean);
}

function splitDetails(value) {
  return value ? value.split(/(?<=[.!?])\s+/).map(clean).filter(Boolean) : [];
}

function inferRoute(days) {
  if (!days.length) return 'As per itinerary';
  const start = days[0].title.replace(/arrival in\s+/i, '').trim();
  const endText = `${days.at(-1).title} ${days.at(-1).bullets.join(' ')}`;
  if (/^(?:planned experiences|day\s*\d+|trip overview)$/i.test(start)) return 'As per itinerary';
  if (/srinagar/i.test(`${start} ${endText}`)) return 'Srinagar – Srinagar';
  if (/delhi/i.test(endText)) return `${start || 'Delhi'} – Delhi`;
  return start ? `${start} – ${start}` : 'As per itinerary';
}

function inferTravelRange(days) {
  const matches = days.flatMap(day => `${day.date} ${day.bullets.join(' ')}`.match(/\b\d{1,2}(?:st|nd|rd|th)?\s+(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)(?:\s+20\d{2})?\b/gi) || []);
  if (!matches.length) return '';
  return matches.length === 1 ? clean(matches[0]) : `${clean(matches[0])} – ${clean(matches.at(-1))}`;
}

function render(data) {
  updateCoverTitle($('packageTitleInput').value || data.title);
  $('travelDate').textContent = data.travelDate || 'Dates on request';
  $('duration').textContent = data.duration || `${Math.max(data.days.length - 1, 1)} Nights / ${data.days.length} Days`;
  const selectedTheme = packageThemes[$('packageType').value] || packageThemes.domestic;
  $('route').textContent = data.route && data.route !== 'As per itinerary' ? data.route : (selectedTheme.route || 'As per itinerary');
  $('price').textContent = data.price;
  $('priceQualifier').textContent = data.priceQualifier || 'Per person';
  $('note').textContent = data.note || 'All services are subject to availability at the time of confirmation.';
  renderItineraryPages(data.days);
  $('inclusions').innerHTML = (data.inclusions.length ? data.inclusions : ['Accommodation as per itinerary', 'Meals and transfers as confirmed']).map(item => `<li>${item}</li>`).join('');
  $('proposal').classList.toggle('dense-itinerary', data.days.length > 8);
  $('proposal').classList.toggle('very-dense-itinerary', data.days.length > 14);
  $('proposal').classList.toggle('dense-details', data.inclusions.length > 6);
  applyPackageTheme($('packageType').value, false);
}

function updateCoverTitle(value) {
  let title = clean(value).replace(/\s+(?:tour\s+)?package\s*$/i, '').trim();
  if (!title) title = 'Custom';
  title = `${title} Package`;
  $('packageTitle').textContent = title;
  $('packageTitle').classList.toggle('long-title', title.length > 28);
}

function itineraryDayMarkup(day) {
  return `<article class="day"><div class="day-number"><div><span>DAY</span><strong>${String(day.number).padStart(2, '0')}</strong></div></div><div><div class="day-head"><h3>${day.title}</h3><time>${day.date}</time></div><ul>${day.bullets.map(item => `<li>${item}</li>`).join('')}</ul></div></article>`;
}

function paginateDays(days) {
  const pages = [];
  let page = [];
  let pageWeight = 0;
  for (const day of days) {
    const characters = day.bullets.join(' ').length;
    const weight = 3 + (day.bullets.length * 0.7) + (characters / 260);
    if (page.length && pageWeight + weight > 38) {
      pages.push(page);
      page = [];
      pageWeight = 0;
    }
    page.push(day);
    pageWeight += weight;
  }
  if (page.length) pages.push(page);
  return pages.length ? pages : [[]];
}

function renderItineraryPages(days) {
  const pages = paginateDays(days);
  const tripSummary = `<div class="itinerary-summary"><div><span>TRAVEL DATE</span><strong>${$('travelDate').textContent}</strong></div><div><span>DURATION</span><strong>${$('duration').textContent}</strong></div><div><span>PICKUP & DROP</span><strong>${$('route').textContent}</strong></div></div>`;
  $('itineraryPages').innerHTML = pages.map((page, index) => `<section class="proposal-page content-page${page.length > 5 ? ' dense-page' : ''}"><div class="page-heading"><div><span>${index === 0 ? 'Your journey' : 'Your journey · continued'}</span><h2>${index === 0 ? 'Day-by-day itinerary' : 'More days to discover'}</h2></div><p>Thoughtfully planned by your Qutbi travel consultant.</p></div>${index === 0 ? tripSummary : ''}<div class="timeline">${page.map(itineraryDayMarkup).join('')}</div></section>`).join('');
}

function applyPackageTheme(type, resetTitle = true) {
  const theme = packageThemes[type] || packageThemes.domestic;
  document.documentElement.dataset.package = theme.palette || type;
  $('coverKicker').textContent = theme.region;
  $('packageSubtitle').textContent = theme.subtitle;
  $('heroChoice').value = theme.photo;
  setPhoto(theme.photo, type === 'domestic' || type === 'international');
  if (resetTitle || !$('packageTitleInput').value.trim()) {
    const optionLabel = $('packageType').selectedOptions?.[0]?.textContent || theme.title || 'Custom Package';
    $('packageTitleInput').value = theme.title || optionLabel.replace(/^Any other\s+/i, 'Custom ');
    updateCoverTitle($('packageTitleInput').value);
    localStorage.setItem('qutbi-cover-title', $('packageTitleInput').value);
  }
  localStorage.setItem('qutbi-package-theme', type);
}

function setPhoto(key, shuffle = false) {
  const pool = photoPools[key] || [photos[key] || photos.kasol];
  if (key !== currentPhotoKey) currentPhotoIndex = 0;
  if (shuffle && pool.length > 1) {
    const previous = currentPhotoIndex;
    do { currentPhotoIndex = Math.floor(Math.random() * pool.length); } while (currentPhotoIndex === previous);
  }
  currentPhotoKey = key;
  currentPhotoIndex %= pool.length;
  failedPhotoAttempts = 0;
  loadCurrentPhoto();
}

function loadCurrentPhoto() {
  const pool = photoPools[currentPhotoKey] || [photos[currentPhotoKey] || photos.kasol];
  const photo = pool[currentPhotoIndex % pool.length];
  $('coverPhoto').src = photo.url;
  $('photoCredit').textContent = photo.credit;
}

function handlePhotoError() {
  const pool = photoPools[currentPhotoKey] || [photos.kasol];
  failedPhotoAttempts += 1;
  if (failedPhotoAttempts < pool.length) {
    currentPhotoIndex = (currentPhotoIndex + 1) % pool.length;
    loadCurrentPhoto();
  } else {
    $('coverPhoto').removeAttribute('src');
    $('photoCredit').textContent = 'Image unavailable · choose Shuffle cover image';
  }
}

function shuffleCurrentPhoto() {
  setPhoto(currentPhotoKey, true);
  showToast('A new cover image has been selected');
}

function renderTerms() {
  const terms = $('termsText').value.split('\n').map(clean).filter(Boolean);
  $('termsList').innerHTML = terms.map(term => `<li>${term}</li>`).join('');
  localStorage.setItem('qutbi-terms', $('termsText').value);
}

function toggleTerms(show) {
  $('termsCard').style.display = show ? 'block' : 'none';
  $('termsEditor').style.display = show ? 'block' : 'none';
  localStorage.setItem('qutbi-show-terms', String(show));
}

function showToast(message) {
  $('toast').textContent = message;
  $('toast').classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $('toast').classList.remove('show'), 2600);
}

function analyze() {
  const data = parseItinerary(sourceText.value);
  render(data);
  localStorage.setItem('qutbi-itinerary-draft', sourceText.value);
  const fallback = data.days.length === 1 && data.days[0].title === 'Trip Overview';
  showToast(fallback ? 'Proposal created · review the extracted trip overview' : `Itinerary analysed · ${data.days.length} days found`);
}

$('analyzeBtn').addEventListener('click', analyze);
$('resetBtn').addEventListener('click', () => { sourceText.value = sampleText; analyze(); });
$('packageType').addEventListener('change', event => applyPackageTheme(event.target.value));
$('packageTitleInput').addEventListener('input', event => {
  updateCoverTitle(event.target.value);
  localStorage.setItem('qutbi-cover-title', event.target.value);
});
$('packageType').addEventListener('click', event => {
  if (event.target.value === 'domestic' || event.target.value === 'international') setPhoto(packageThemes[event.target.value].photo, true);
});
$('heroChoice').addEventListener('change', event => setPhoto(event.target.value, true));
$('shufflePhoto').addEventListener('click', shuffleCurrentPhoto);
$('coverPhoto').addEventListener('error', handlePhotoError);
$('showPrice').addEventListener('change', event => $('priceCard').style.display = event.target.checked ? 'grid' : 'none');
$('showContact').addEventListener('change', event => $('proposalFooter').style.display = event.target.checked ? 'flex' : 'none');
$('showTerms').addEventListener('change', event => toggleTerms(event.target.checked));
$('termsText').addEventListener('input', renderTerms);
$('logoInput').addEventListener('change', event => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => { $('customLogo').src = reader.result; $('customLogo').style.display = 'block'; $('proposalBrandMark').style.display = 'none'; showToast('Logo added to this proposal'); };
  reader.readAsDataURL(file);
});
async function prepareAndPrint() {
  const button = $('printBtn');
  const originalLabel = button.textContent;
  button.disabled = true;
  button.textContent = 'Preparing PDF…';
  showToast('Preparing photographs and fonts for your PDF');
  try {
    if (document.fonts?.ready) await document.fonts.ready;
    const image = $('coverPhoto');
    for (let attempt = 0; attempt < 3 && (!image.complete || !image.naturalWidth); attempt += 1) {
      try {
        await Promise.race([image.decode(), new Promise(resolve => setTimeout(resolve, 3000))]);
      } catch {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    showToast('In the print window, choose “Save as PDF”');
    window.print();
  } finally {
    button.disabled = false;
    button.textContent = originalLabel;
  }
}

$('printBtn').addEventListener('click', prepareAndPrint);

sourceText.value = localStorage.getItem('qutbi-itinerary-draft') || sampleText;
$('packageType').value = localStorage.getItem('qutbi-package-theme') || 'himachal';
$('packageTitleInput').value = localStorage.getItem('qutbi-cover-title') || '';
$('termsText').value = localStorage.getItem('qutbi-terms') || $('termsText').value;
$('showTerms').checked = localStorage.getItem('qutbi-show-terms') !== 'false';
applyPackageTheme($('packageType').value, !$('packageTitleInput').value.trim());
renderTerms();
toggleTerms($('showTerms').checked);
analyze();

