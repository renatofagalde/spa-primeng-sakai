# SPA PrimeNG Sakai

## 📋 Descrição

Aplicação Angular 19 integrada com PrimeNG e preparada para o template Sakai. Este projeto utiliza as mais recentes versões estáveis do Angular e PrimeNG com arquitetura standalone components.

## 🚀 Tecnologias

- **Angular**: 19.2.14
- **PrimeNG**: 19.1.3
- **PrimeIcons**: 7.0.0
- **PrimeFlex**: 3.3.1
- **Node.js**: 20.19.0+
- **npm**: 10.8.2+

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

### 3. Execute o projeto

```bash
ng serve
```

O projeto estará disponível em: `http://localhost:4200`

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── app.component.ts       # Componente principal
│   ├── app.component.html     # Template principal
│   ├── app.component.scss     # Estilos do componente
│   ├── app.config.ts          # Configurações da aplicação
│   └── app.routes.ts          # Configuração de rotas
├── styles.scss                # Estilos globais
└── index.html                 # Página principal
```

## 🎨 Configuração de Temas

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

## 🧩 Componentes PrimeNG Configurados

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

# Build
ng build                   # Build para produção
ng build --watch           # Build com watch mode

# Testes
ng test                    # Executa testes unitários
ng e2e                     # Executa testes e2e

# Linting
ng lint                    # Executa linter

# Outros
ng generate component nome # Gera novo componente
ng add @angular/material   # Adiciona Angular Material
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

### Problema: Erro de CSS não encontrado

**Solução**: Verifique se todos os estilos estão corretamente configurados no `angular.json`.

### Problema: Componente PrimeNG não funciona

**Solução**:
1. Verifique se o módulo foi importado no componente
2. Confirme se `provideAnimations()` está configurado
3. Verifique se os estilos CSS estão carregando

## 🔄 Próximos Passos

- [ ] Integração do template Sakai
- [ ] Configuração de layout responsivo
- [ ] Implementação de rotas
- [ ] Configuração de guards
- [ ] Testes unitários

## 📚 Recursos Úteis

- [Documentação Angular](https://angular.dev)
- [Documentação PrimeNG](https://primeng.org)
- [Template Sakai](https://primeng.org/templates/sakai)
- [PrimeFlex (CSS Utilities)](https://primeflex.org)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request


---

**Desenvolvido com ❤️ usando Angular + PrimeNG**
