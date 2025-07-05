# SPA PrimeNG Sakai

## 📋 Description

Modern Single Page Application built with Angular 19 and PrimeNG, designed as a foundation for enterprise-level web applications. This project features a complete authentication system, dashboard with real API integration, and professional admin interface.

The application includes a fully functional dashboard with authentication guards, real-time data from ReqRes API, interactive charts, and a responsive design following modern Angular patterns with standalone components.

**Key Features:**
- 🚀 **Modern Stack**: Angular 19 + PrimeNG 19 + TypeScript
- 🔐 **Authentication System**: Login/logout with route guards
- 📊 **Interactive Dashboard**: Real data from ReqRes API + Charts
- 🎨 **Professional UI**: Sakai template integration with PrimeNG components
- 📱 **Responsive Design**: Mobile-first approach with PrimeFlex utilities
- ⚡ **Performance**: Standalone components for optimal bundle sizing
- 🛡️ **Route Protection**: Authentication guards for secure areas
- 📈 **Data Visualization**: Charts and tables with real API data

## 🚀 Tecnologias

- **Angular**: 19.2.14
- **PrimeNG**: 19.1.3
- **PrimeIcons**: 7.0.0
- **PrimeFlex**: 3.3.1
- **Chart.js**: Latest (para gráficos)
- **Node.js**: 20.19.0+
- **npm**: 10.8.2+
- **ReqRes API**: Para dados reais com autenticação

## 📦 Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** versão 20.19.0 ou superior
- **npm** versão 10.8.2 ou superior
- **Angular CLI** versão 19

### Instalação do Node.js (via nvm)

```bash
# Instalar nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc

# Instalar Node.js
nvm install 20.19.0
nvm use 20.19.0
nvm alias default 20.19.0
```

### Instalação do Angular CLI

```bash
npm install -g @angular/cli@19
```

## 🛠️ Instalação

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd spa-primeng-sakai
```

### 2. Instale as dependências

```bash
npm install
```

**Nota**: Se houver conflitos de versão, use:
```bash
npm install --force
```

### 3. Instale Chart.js para gráficos

```bash
npm install chart.js
```

### 4. Execute o projeto

```bash
ng serve
```

O projeto estará disponível em: `http://localhost:4200`

**Primeira execução:**
1. Será redirecionado para `/login`
2. Use as credenciais de teste: `eve.holt@reqres.in` / qualquer senha
3. Após login, será redirecionado para `/dashboard`

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── auth/                   # Sistema de autenticação
│   │   ├── login/             # Componente de login
│   │   ├── auth.service.ts    # Serviço de autenticação
│   │   └── auth.guard.ts      # Guard de proteção de rotas
│   ├── dashboard/             # Dashboard principal
│   │   ├── dashboard.component.ts
│   │   ├── dashboard.component.html
│   │   └── dashboard.component.scss
│   ├── data/                  # Serviços de dados
│   │   └── reqres.service.ts  # Integração com ReqRes API
│   ├── app.component.ts       # Componente principal
│   ├── app.config.ts          # Configurações da aplicação
│   └── app.routes.ts          # Configuração de rotas
├── styles.scss                # Estilos globais
└── index.html                 # Página principal
```

## 🔐 Sistema de Autenticação

### Login
- **URL**: `/login`
- **Credenciais de teste**:
  - Email: `eve.holt@reqres.in`
  - Senha: qualquer senha válida
- **API**: ReqRes.in com autenticação

### Proteção de Rotas
- Dashboard protegido por `authGuard`
- Redirecionamento automático para login se não autenticado
- Token armazenado no localStorage

### Exemplo de uso da API:

```bash
# Testar API ReqRes com curl
curl -H "x-api-key: reqres-free-v1" https://reqres.in/api/users

# Login via API
curl -X POST \
  -H "x-api-key: reqres-free-v1" \
  -H "Content-Type: application/json" \
  -d '{"email":"eve.holt@reqres.in","password":"cityslicka"}' \
  https://reqres.in/api/login
```

O projeto utiliza o tema **Lara Light Blue** do PrimeNG via CDN. Os estilos estão configurados no `angular.json`:

```json
"styles": [
  "node_modules/primeicons/primeicons.css",
  "https://cdn.jsdelivr.net/npm/primeng@17.18.11/resources/themes/lara-light-blue/theme.css",
  "https://cdn.jsdelivr.net/npm/primeng@17.18.11/resources/primeng.min.css",
  "node_modules/primeflex/primeflex.css",
  "src/styles.scss"
]
```

## 🧩 Componentes PrimeNG Utilizados

### Autenticação
```typescript
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
```

### Dashboard
```typescript
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';      // Requer Chart.js
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
```

### Exemplo de uso básico:

```typescript
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonModule, CardModule],
  template: `
    <p-card header="Exemplo">
      <p-button label="Clique aqui" icon="pi pi-check"></p-button>
    </p-card>
  `
})
export class ExampleComponent { }
```

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
ng serve                    # Inicia servidor de desenvolvimento
ng serve --port 4201       # Inicia em porta específica
ng serve --open            # Abre automaticamente no navegador

# Build
ng build                   # Build para produção
ng build --watch           # Build com watch mode

# Testes
ng test                    # Executa testes unitários
ng e2e                     # Executa testes e2e

# Linting
ng lint                    # Executa linter

# Geração de componentes
ng generate component nome        # Gera novo componente
ng generate service nome          # Gera novo serviço
ng generate guard nome            # Gera novo guard

# Utilitários
ng add @angular/material          # Adiciona Angular Material
ng update                         # Atualiza dependências
```

## 🔧 Configurações Importantes

### 1. Animações PrimeNG

As animações estão configuradas em `app.config.ts`:

```typescript
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(), // Essencial para PrimeNG
    // ... outros providers
  ]
};
```

### 2. Standalone Components

O projeto utiliza a arquitetura mais moderna do Angular com standalone components. Para adicionar novos componentes PrimeNG:

```typescript
import { ModuloPrimeNG } from 'primeng/modulo';

@Component({
  imports: [ModuloPrimeNG], // Adicione módulos aqui
  // ...
})
```

## 🚨 Troubleshooting

### Problema: Conflitos de versão
**Solução**:
```bash
rm -rf node_modules package-lock.json
npm install --force
```

### Problema: Erro "Could not resolve chart.js/auto"
**Solução**:
```bash
npm install chart.js
```

### Problema: Erro de CSS não encontrado
**Solução**: Verifique se todos os estilos estão corretamente configurados no `angular.json`.

### Problema: Componente PrimeNG não funciona
**Solução**:
1. Verifique se o módulo foi importado no componente
2. Confirme se `provideAnimations()` está configurado
3. Verifique se os estilos CSS estão carregando

### Problema: API ReqRes retorna "Missing API key"
**Solução**: Certifique-se de que o header `x-api-key: reqres-free-v1` está sendo enviado:
```typescript
private httpOptions = {
  headers: new HttpHeaders({
    'x-api-key': 'reqres-free-v1'
  })
};
```

### Problema: Redirecionamento infinito no login
**Solução**: Verifique se o token está sendo salvo corretamente no localStorage após o login bem-sucedido.

## 🔄 Próximos Passos

- [x] ✅ Sistema de autenticação completo
- [x] ✅ Dashboard com dados reais da API
- [x] ✅ Gráficos interativos com Chart.js
- [x] ✅ Tabela com paginação e ações
- [x] ✅ Guards de proteção de rotas
- [x] ✅ Layout responsivo
- [ ] 🔄 Integração completa do template Sakai
- [ ] 📱 Menu lateral navegável
- [ ] 🎨 Temas customizáveis
- [ ] 🔔 Sistema de notificações
- [ ] 📋 CRUD completo de usuários
- [ ] 🔍 Filtros e busca avançada
- [ ] 📊 Mais tipos de gráficos
- [ ] 🛡️ Roles e permissões
- [ ] 🧪 Testes unitários e e2e

## 📚 Recursos Úteis

### Documentação
- [Documentação Angular](https://angular.dev)
- [Documentação PrimeNG](https://primeng.org)
- [Template Sakai](https://primeng.org/templates/sakai)
- [PrimeFlex (CSS Utilities)](https://primeflex.org)
- [Chart.js Documentation](https://www.chartjs.org/docs/)

### API Externa
- [ReqRes API Documentation](https://reqres.in/)
- **API Key**: `reqres-free-v1`
- **Base URL**: `https://reqres.in/api`

### Comandos Úteis de Teste
```bash
# Testar API ReqRes
curl -H "x-api-key: reqres-free-v1" https://reqres.in/api/users

# Testar login
curl -X POST \
  -H "x-api-key: reqres-free-v1" \
  -H "Content-Type: application/json" \
  -d '{"email":"eve.holt@reqres.in","password":"cityslicka"}' \
  https://reqres.in/api/login

# Obter usuário específico  
curl -H "x-api-key: reqres-free-v1" https://reqres.in/api/users/2
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ usando Angular + PrimeNG**
