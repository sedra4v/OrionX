    // إنشاء قطرات المطر المحسنة
    const rainContainer = document.getElementById('rainContainer');
    const dropCount = 40; // زيادة عدد القطرات
    
    for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement('div');
        drop.classList.add('drop');
        
        // توزيع عشوائي للقطرات تحت الغيمة
        drop.style.left = (Math.random() * 100) + '%';
        
        // سرعة متغيرة للمطر
        drop.style.animationDuration = (Math.random() * 1.5 + 1) + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';
        
        // إضافة تمايل بسيط للقطرات
        drop.style.transform = `rotateZ(${Math.random() * 10 - 5}deg)`;
        
        rainContainer.appendChild(drop);
    }
    
    // تأثير تفاعلي إضافي
    const cloudParts = document.querySelectorAll('.cloud-part');
    cloudParts.forEach(part => {
        part.addEventListener('mouseover', () => {
            part.style.transition = 'all 0.5s ease';
        });
        
        part.addEventListener('mouseout', () => {
            part.style.transition = 'all 0.3s ease';
        });
    });