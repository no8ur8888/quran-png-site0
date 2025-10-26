// إنشاء الصور تلقائيًا من 1.png إلى 114.png
const gallery = document.getElementById("gallery");

for (let i = 1; i <= 114; i++) {
  const img = document.createElement("img");
  img.src = `images/${i}.png`;
  img.alt = `صورة ${i}`;
  gallery.appendChild(img);
}
