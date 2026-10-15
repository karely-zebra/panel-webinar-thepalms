# Panel del webinar · The Palms

Avance en vivo de los registros al webinar de The Palms (22 oct 2026, 8:00 PM).
Lo que está en la raíz se publica en GitHub Pages.

La página es un solo archivo estático. Cada 60 segundos pide los registros a un
endpoint de n8n (`ZEBRA | THEPALMS | Panel webinar · datos`), que consulta
Kommo en ese momento: cada lead que entró a la etapa WEBINAR del embudo
Liner IA desde el 14 oct 2026 (con su nombre, campaña y atribución) y
`rr.asesores` para el nombre del asesor. Nada se copia ni se guarda aquí: un
lead que se mueve a WEBINAR aparece en el panel al minuto siguiente, y sigue
contando aunque después cambie de etapa.

## Regenerar

    cd src && node build-web.js

Luego `git add -A && git commit && git push`. Solo hace falta si cambias el
diseño o `src/grupos.js` (objetivo, fechas, asesores, metas).
