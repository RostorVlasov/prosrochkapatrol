<template>
    <div class="my-6 p-6 bg-linear-to-br from-slate to-gray-500 rounded-2xl text-white">
        <div class="flex sm:flex-row flex-col items-start gap-4">
            <AppIcon name="shieldCheck" class="w-6 h-6 text-beige-500 shrink-0 mt-0.5" />
            <div>
                <h4 class="font-bold text-sm sm:text-base mb-1 text-off-white">2.3. Фото и видео (Автоматическая деанонимизация файлов)</h4>
                <p class="text-xs sm:text-sm text-off-white/90 leading-relaxed">
                    При загрузке любых медиафайлов наша внутренняя инфраструктура автоматически вырезает из них
                    абсолютно все метаданные (EXIF-теги, геолокацию, информацию о производителе и модели устройства).
                    Исходное имя файла полностью стирается и заменяется случайной строкой символов (хэшем). Это
                    исключает возможность скрытого отслеживания автора материалов по техническим свойствам снимка.
                </p>
            </div>
        </div>
    </div>
</template>

