# Configuration SMTP - Afrinexus Forum

## Configuration Actuelle

### Serveur SMTP
- **Serveur** : `node38-ca.n0c.com`
- **Port** : `587` (SMTP sécurisé)
- **Authentification** : Oui
- **Sécurité** : STARTTLS

### Identifiants
- **Email** : `contact@afrinexus-forum.org`
- **Mot de passe** : `V;s8k7=EVv`

### Ports Disponibles
- **SMTP** : 465 (SSL) / 587 (STARTTLS)
- **IMAP** : 993 (SSL)
- **POP3** : 995 (SSL)

## Fonctionnement

### 1. API Route
- **Endpoint** : `/api/send-email`
- **Méthode** : POST
- **Format** : JSON

### 2. Données Requises
```json
{
  "name": "Nom du contact",
  "email": "email@example.com",
  "company": "Entreprise (optionnel)",
  "service": "Service d'intérêt (optionnel)",
  "message": "Message du contact"
}
```

### 3. Template Email
L'email envoyé contient :
- **Expéditeur** : contact@afrinexus-forum.org
- **Destinataire** : contact@afrinexus-forum.org
- **Reply-To** : Email du contact
- **Sujet** : "Nouveau message de contact - [Nom]"
- **Format** : HTML + Texte

## Sécurité

### Variables d'Environnement (Recommandé)
Pour la production, créez un fichier `.env.local` :

```env
SMTP_HOST=node38-ca.n0c.com
SMTP_PORT=587
SMTP_USER=contact@afrinexus-forum.org
SMTP_PASS=V;s8k7=EVv
```

### Configuration Sécurisée
```typescript
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})
```

## Test

### 1. Test Local
1. Démarrez le serveur : `npm run dev`
2. Allez sur `http://localhost:3000`
3. Remplissez le formulaire de contact
4. Vérifiez la réception de l'email

### 2. Test API Direct
```bash
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "message": "Message de test"
  }'
```

## Dépannage

### Erreurs Courantes
1. **Authentication failed** : Vérifiez les identifiants
2. **Connection timeout** : Vérifiez le serveur et le port
3. **TLS errors** : Vérifiez la configuration SSL/TLS

### Logs
Les erreurs sont loggées dans la console du serveur Next.js.

## Production

### Recommandations
1. Utilisez des variables d'environnement
2. Activez les logs de sécurité
3. Configurez un rate limiting
4. Utilisez HTTPS en production
5. Surveillez les tentatives d'envoi

### Monitoring
- Surveillez les erreurs d'envoi
- Vérifiez les logs du serveur SMTP
- Contrôlez l'utilisation de la bande passante

