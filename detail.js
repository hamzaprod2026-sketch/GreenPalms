const WA = "https://wa.me/212662091412?text=";
const activity = window.GREEN_PALMS_ACTIVITY || {};
const title = activity.title || "Morocco experience";
const price = activity.price || "On request";
const badge = activity.badge || "Activity";
const image = activity.image || "";
const details = [
  {match:"quad ride in the palmeraie", duration:"1 hour", overview:"Feel the thrill of an off-road ride through the palm groves and desert trails of Marrakech’s Palmeraie. This guided experience combines adventure, scenic landscapes and a traditional Moroccan tea break.", highlights:["1-hour guided quad ride through palm groves and desert paths","Safety briefing and protective equipment","Mint tea break with traditional bread","Local guide and hotel transfers in Marrakech","Suitable for beginners with guidance"], includes:["Guided quad ride","Helmet and protective goggles","Local guide","Mint tea break","Hotel pickup and drop-off in Marrakech"], excludes:["Personal expenses","Tips","Additional food and drinks"]},
  {match:"camel ride in the palmeraie", duration:"1 hour (activity)", overview:"Enjoy a peaceful camel ride through the palm groves of Marrakech. Discover the oasis at a relaxed pace, meet local hosts and enjoy a traditional mint tea break in a Berber setting.", highlights:["Camel ride through the Palmeraie","Sunrise, daytime or sunset atmosphere","Traditional mint tea break","Berber clothing for memorable photos","Hotel transfers in Marrakech"], includes:["Camel ride with local handler","Mint tea break","Berber clothing for photos","Hotel pickup and drop-off in Marrakech"], excludes:["Personal expenses","Tips","Additional snacks and drinks"]},
  {match:"fantasia", duration:"Evening", overview:"Enjoy a festive Moroccan evening with traditional entertainment, a lively atmosphere and a dinner-show experience inspired by local culture.", highlights:["Traditional Moroccan dinner-show atmosphere","Cultural performances and festive entertainment","An evening experience in Marrakech","Shared or private options depending on the selected offer"], includes:["Dinner-show admission as specified by the selected offer","Evening entertainment"], excludes:["Personal purchases","Tips","Extra drinks not specified in the offer"]},
  {match:"hot air balloon", duration:"Morning · Sunrise", overview:"Discover the landscapes around Marrakech from the sky during a sunrise hot-air-balloon experience. Enjoy panoramic views and a memorable start to the day.", highlights:["Sunrise flight over the landscapes around Marrakech","Panoramic views of the Atlas region","Memorable morning experience","Private or classic option depending on the selected offer"], includes:["Balloon experience according to selected package","Local assistance"], excludes:["Personal expenses","Optional extras not specified in the package"]},
  {match:"cooking workshop", duration:"Half day", overview:"Take part in a Moroccan cooking experience and discover local flavours, ingredients and culinary traditions while preparing classic dishes.", highlights:["Introduction to Moroccan ingredients and flavours","Hands-on cooking experience","Discover traditional recipes such as tagine and couscous","A cultural experience in a local setting"], includes:["Cooking session","Ingredients used during the workshop","Meal prepared during the class"], excludes:["Personal purchases","Transport unless confirmed with the selected offer"]},
  {match:"agafay desert quad", duration:"1 hour", overview:"Explore the rocky desert landscapes of Agafay on a guided quad adventure from Marrakech. Enjoy open views, off-road tracks and an exciting escape from the city.", highlights:["Guided quad ride in the Agafay Desert","Off-road desert landscapes","Local guide and safety instructions","Marrakech pickup depending on the selected offer"], includes:["Quad ride","Safety briefing and equipment","Guide"], excludes:["Personal expenses","Tips","Extra food and drinks"]},
  {match:"agafay desert camel", duration:"1 hour", overview:"Experience the Agafay Desert at a gentle pace on a camel ride. Take in the rocky desert scenery and enjoy a memorable Moroccan outdoor experience.", highlights:["Camel ride in the Agafay Desert","Desert scenery and photo opportunities","Sunset option depending on availability","Local handler"], includes:["Camel ride","Local handler"], excludes:["Personal expenses","Tips","Additional food and drinks"]},
  {match:"agafay desert delights", duration:"Full evening", overview:"Combine outdoor desert activities with a traditional evening atmosphere in Agafay. This package brings together quad biking, camel riding and a dinner show.", highlights:["Quad biking in Agafay","Camel riding experience","Evening dinner-show atmosphere","A complete desert outing from Marrakech"], includes:["Quad activity","Camel ride","Dinner-show experience as specified by the offer"], excludes:["Personal expenses","Tips","Extra drinks not specified in the offer"]},
  {match:"buggy", duration:"Sunset · Combo experience", overview:"Enjoy an adventure combo around Marrakech with a buggy experience for two and a camel ride. A lively way to discover desert landscapes around the city.", highlights:["Buggy experience for two people","Camel riding experience","Desert scenery around Marrakech","Sunset atmosphere"], includes:["Buggy experience for 2 pax","Camel ride","Local assistance"], excludes:["Personal expenses","Tips","Additional food and drinks"]},
  {match:"shopping in the souks", duration:"Flexible · Guided visit", overview:"Explore the lively souks of Marrakech’s medina, discover traditional crafts and browse the colourful stalls with the help of a local guide.", highlights:["Discover the souks of the Marrakech medina","Explore traditional crafts and local products","Enjoy the atmosphere of the old town","Opportunity to discover local artisan traditions"], includes:["Guided shopping experience as specified by the selected offer"], excludes:["Personal purchases","Tips"]},
  {match:"city tour of marrakech", duration:"Half day", overview:"Discover the main cultural highlights of Marrakech on a guided city experience, with time to explore the atmosphere, history and landmarks of the Red City.", highlights:["Discover Marrakech’s cultural highlights","Explore the historic medina and city landmarks","Local guide","Comfortable experience from Marrakech"], includes:["City tour","Local guide as specified by the selected offer"], excludes:["Personal purchases","Meals unless specified","Entrance fees unless specified"]}
];

function findDetails(name) {
  const t = name.toLowerCase();
  return details.find(x => t.includes(x.match)) || {
    duration: "According to selected experience",
    overview: `Discover ${name}. Contact our team to confirm the exact schedule, inclusions and availability for your selected date.`,
    highlights: ["Experience in and around Marrakech", "Local assistance", "Schedule confirmed according to availability"],
    includes: ["Services described for the selected activity; final details confirmed before booking"],
    excludes: ["Personal expenses", "Optional extras not listed in the selected offer"]
  };
}
const info = findDetails(title);
const list = items => items.map(x => `<li>${x}</li>`).join("");
const root = document.getElementById("activity-detail-page");
root.innerHTML = `
  <div class="detail-hero">
    <div class="detail-photo" style="${image ? `background-image:url('${image}')` : ""}"></div>
    <div class="detail-summary">
      <span class="eyebrow">${badge}</span>
      <h1>${title}</h1>
      <p class="detail-location">Marrakech · Morocco</p>
      <div class="detail-facts"><span>◷ ${info.duration}</span><span>⌖ Marrakech, Morocco</span><span>♧ ${badge}</span></div>
      <div class="detail-price"><small>From</small><strong>${price}</strong></div>
      <a class="btn detail-book" href="#detail-booking">Book this experience</a>
    </div>
  </div>
  <div class="detail-columns">
    <div class="detail-main">
      <h2>Overview</h2><p>${info.overview}</p>
      <h2>Highlights</h2><ul class="detail-list">${list(info.highlights)}</ul>
      <h2>Includes &amp; Excludes</h2>
      <div class="include-grid">
        <div><h3>Includes</h3><ul class="detail-list">${list(info.includes)}</ul></div>
        <div><h3>Excludes</h3><ul class="detail-list">${list(info.excludes)}</ul></div>
      </div>
      <p class="detail-note">The exact departure time, pickup point and final inclusions are confirmed by our team according to the selected date and option.</p>
    </div>
    <aside class="detail-booking" id="detail-booking">
      <h2>Booking this experience</h2>
      <p>Send your request and our team will confirm availability and details.</p>
      <form id="activity-booking-form">
        <label>Full name<input name="name" required placeholder="Your full name"></label>
        <label>Email<input name="email" type="email" required placeholder="name@example.com"></label>
        <label>Preferred date<input name="date" type="date" required></label>
        <label>Preferred time<select name="time"><option>Flexible</option><option>Morning</option><option>Afternoon</option><option>Sunset</option><option>Evening</option></select></label>
        <div class="booking-counts">
          <label>Adults<input name="adults" type="number" min="1" value="2" required></label>
          <label>Children<input name="children" type="number" min="0" value="0"></label>
        </div>
        <label>Message<textarea name="message" rows="3" placeholder="Pickup location or special request"></textarea></label>
        <button class="btn" type="submit">Send booking request</button>
        <small>No online payment is taken here. Your request will be sent to Green Palms by WhatsApp.</small>
      </form>
    </aside>
  </div>`;
document.getElementById("activity-booking-form").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.currentTarget);
  const message = `Hello Green Palms! I would like to book: ${title}. Price shown: ${price}. Name: ${f.get("name")}. Email: ${f.get("email")}. Date: ${f.get("date")}. Time: ${f.get("time")}. Adults: ${f.get("adults")}. Children: ${f.get("children")}. Message: ${f.get("message") || "-"}. Please confirm availability and final details.`;
  window.open(WA + encodeURIComponent(message), "_blank", "noopener");
});
