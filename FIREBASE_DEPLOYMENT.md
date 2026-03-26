# Guía de Deployment en Firebase Hosting

Este documento te guía paso a paso para desplegar tu portfolio en Firebase Hosting.

## 1️⃣ Requisitos Previos

- Tener una cuenta en [Google Firebase](https://firebase.google.com)
- Node.js v18+ instalado
- Firebase CLI instalado globalmente

```bash
npm install -g firebase-tools
```

## 2️⃣ Autenticarse en Firebase

```bash
firebase login
```

Se abrirá tu navegador para que inicies sesión con tu cuenta de Google.

## 3️⃣ Inicializar Firebase en el Proyecto (Primera vez)

Si aún no has inicializado Firebase en este proyecto:

```bash
firebase init hosting
```

Responde las preguntas así:
```
? What do you want to use as your public directory? → out
? Configure as a single-page app (rewrite all URLs to /index.html)? → Yes
? Set up automatic builds and deploys with GitHub? → No (o Yes si lo deseas)
? File .firebaserc already exists. Overwrite? → No
```

### Nota:
El archivo `.firebaserc` ya existe con configuración placeholder. Necesitarás actualizar el `project-id`:

```bash
firebase init hosting --project=tu-proyecto-id
```

## 4️⃣ Configurar tu Proyecto de Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Crea un nuevo proyecto o selecciona uno existente
3. Anota tu **Project ID**
4. Actualiza `.firebaserc`:

```json
{
  "projects": {
    "default": "tu-proyecto-id-aqui"
  }
}
```

## 5️⃣ Build y Deploy

### Opción A: Script automático (RECOMENDADO)

```bash
npm run deploy
```

Esto ejecuta automáticamente:
1. `npm run build` — Compila Next.js
2. `firebase deploy` — Sube a Firebase

### Opción B: Manualmente

```bash
# Build
npm run build

# Deploy
firebase deploy
```

## 6️⃣ Verificar el Deployment

Una vez que termine, Firebase te mostrará la URL donde está desplegado:

```
✔ Deploy complete!

Project Console: https://console.firebase.google.com/project/tu-proyecto-id/hosting
Hosting URL: https://tu-proyecto-id.web.app
```

Visita la URL para verificar que tu portfolio está en línea.

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios, simplemente ejecuta:

```bash
npm run deploy
```

O en 2 comandos:
```bash
npm run build
firebase deploy
```

## 📊 Monitorear Deployment

```bash
# Ver histórico de deployments
firebase hosting:list

# Ver detalles de un deployment específico
firebase hosting:channel:list

# Ver logs en vivo
firebase hosting:requests
```

## 🔧 Solución de Problemas

### Error: "Project not found"
Verifica que el `project-id` en `.firebaserc` es correcto.

### Error: "Permission denied"
Ejecuta `firebase login` nuevamente.

### El sitio se muestra en blanco o sin estilos
- Limpia el cache del navegador
- Verifica que `firebase.json` tiene la configuración correcta
- Revisa que Next.js compiló correctamente: `npm run build`

### Cambios no se reflejan
Espera 1-2 minutos para que el CDN se actualice, o limpia el cache del navegador.

## 📝 Variables de Entorno (Opcional)

Si necesitas variables de entorno en Firebase:

1. Crea un archivo `.env.local` en la raíz:
```
NEXT_PUBLIC_API_URL=https://api.ejemplo.com
```

2. Deploy como siempre:
```bash
npm run deploy
```

Las variables `NEXT_PUBLIC_*` se embeben en el build.

## 🚀 Configuración Avanzada

Si necesitas funcionalidades avanzadas (funciones serverless, rewrite rules, etc.), edita `firebase.json`.

Ejemplo para agregar funciones serverless:
```json
{
  "hosting": {
    ...
    "rewrites": [
      {
        "source": "/api/**",
        "function": "api"
      }
    ]
  },
  "functions": {
    "source": "functions"
  }
}
```

## ✅ Checklist Pre-Deploy

- [ ] Foto añadida en `public/foto.jpg`
- [ ] Contenido actualizado (nombre, email, proyectos, skills)
- [ ] Build ejecutado sin errores: `npm run build`
- [ ] Probado localmente: `npm run dev`
- [ ] `.firebaserc` tiene el Project ID correcto
- [ ] Conectado a Firebase: `firebase login`

## 📞 Soporte

- [Documentación Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Documentación Next.js Deployment](https://nextjs.org/docs/deployment)
