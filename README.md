# Panel del webinar · The Palms

Avance en vivo de los registros al webinar de The Palms (22 oct 2026, 8:00 PM).
Lo que está en la raíz se publica en GitHub Pages.

La página es un solo archivo estático. Cada 60 segundos pide los registros a un
endpoint de n8n (`ZEBRA | THEPALMS | Panel webinar · datos`), que consulta
Postgres en ese momento: `"Samuel Maya"."17_webinar_smaya"` cruzada con
`"The Palms"."02_entrada_leads_thepalms"` (nombre, campaña, atribución) y
`rr.asesores` (nombre del asesor). Nada se copia ni se guarda aquí: lo que se
pega en Postgres aparece en el panel al minuto siguiente.

## Regenerar

    cd src && node build-web.js

Luego `git add -A && git commit && git push`. Solo hace falta si cambias el
diseño o `src/grupos.js` (objetivo, fechas, asesores, metas).
