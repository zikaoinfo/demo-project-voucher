---

# **Voucher - Light Version**

## **Description**

Ce projet est une version **très allégée** d'une a pour gérer des bons de réduction (*vouchers*), et leurs achats. Par manque de temps, toutes les fonctionnalités prévues n'ont pas pu être implémentées. Toutefois, cette version permet d'avoir un aperçu fonctionnel des principales structures et mécanismes.

### **Caractéristiques principales :**
- Utilisation de ma propre librairie déjà publié sur NPM: [NgxEventHubService](https://www.npmjs.com/package/ngx-event-hub/v/0.0.2-beta)
- Utilisation d'**IndexedDB** comme base de données locale.
- Un **pseudo-service backend** simule les interactions avec une base de données distante.
- Une implémentation des reponsivness
- Un schéma de base de données clair et extensible (voir ci-dessous).

---

## **Lancer le projet**

1. Assurez-vous d'avoir **Node.js** et **Angular CLI** installés sur votre machine.
2. Clonez le dépôt.
3. Installez les dépendances avec :
   ```bash
   npm install
   ```
4. Lancez le projet avec la commande :
   ```bash
   ng serve
   ```
5. Ouvrez un navigateur et accédez à l'URL suivante : [http://localhost:4200](http://localhost:4200).

---

## **Base de données locale : IndexedDB**

Le projet utilise **IndexedDB** pour stocker les données en local. Voici le schéma défini pour les différentes entités :

### **Schéma des object stores :**

#### **Client**
| Champ        | Type      | Options        |
|--------------|-----------|----------------|
| `id`         | Numérique | Clé primaire   |
| `name`       | Texte     | Non unique     |
| `categorie`  | Texte     | Non unique     |
| `email`      | Texte     | Non unique     |
| `logo`       | Texte     | Non unique     |
| `password`   | Texte     | Non unique     |

#### **User**
| Champ        | Type      | Options        |
|--------------|-----------|----------------|
| `id`         | Numérique | Clé primaire   |
| `name`       | Texte     | Non unique     |
| `email`      | Texte     | Non unique     |
| `password`   | Texte     | Non unique     |

#### **Voucher**
| Champ           | Type      | Options         |
|------------------|-----------|-----------------|
| `id`            | Numérique | Clé primaire    |
| `voucher_code`   | Texte     | Unique          |
| `price`          | Numérique | Non unique      |
| `value`          | Numérique | Non unique      |
| `image`          | Texte     | Non unique      |
| `description`    | Texte     | Non unique      |
| `is_active`      | Booléen   | Non unique      |
| `client_id`      | Numérique | Non unique      |

#### **Voucher Purchases**
| Champ           | Type      | Options         |
|------------------|-----------|-----------------|
| `purchase_id`    | Numérique | Clé primaire    |
| `user_id`        | Numérique | Non unique      |
| `voucher_id`     | Numérique | Non unique      |
| `purchase_date`  | Date      | Non unique      |

---

## **Limites et améliorations futures**

### **Contrainte de temps**
- Par manque de temps, de nombreuses fonctionnalités n'ont pas été implémentées, comme :
  - L'ajout d'un Voucher
  - Suivie des sales
  - Une API backend réelle pour la persistance des données.
  seul l'activation et desactivation qu'a était implementé

### **Améliorations possibles**
1. **Mise en place d'un backend** :
   - Remplacer le pseudo-service actuel par une API REST ou GraphQL.
2. **Ajout de fonctionnalités** :
   - Gestion des rôles utilisateurs (Admin, Client, User).
   - Système d'authentification sécurisé.
3. **Tests et optimisation** :
   - Intégration de tests unitaires et end-to-end avec Cypress et unitaire avec Jasmine-Karma
4. **UI/UX** :
   - Ajouter des animations et un thème cohérent avec Angular Material.

---

## **Conclusion**

Ce projet est une démonstration de concept visant à illustrer une structure et une logique De CRUD, avec une utilisation simplifiée d'IndexedDB. Bien que certaines fonctionnalités soient absentes, il offre une base solide pour continuer la disscution et même impementer en live le reste s'il y a besoin
