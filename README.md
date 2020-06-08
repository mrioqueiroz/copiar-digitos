# Copy Digits
Extensão para o navegador Google Chrome que permite enviar para a Área de Transferência apenas os dígitos (caracteres numéricos) do texto selecionado. O objetivo é facilitar o preenchmento de formulários que aceitam somente dados neste formato.

## Instalação
- Abrir o navegador Google Chrome;
- Acessar a página de extensões (`chrome://extensions/`);
- Habilitar o modo desenvolvedor no canto superior direito;
- Acessar o [repositório do projeto](https://github.com/mrioqueiroz/copy-digits-ext) no GitHub e baixar o `.ZIP` da extensão através do botão `Clone or download` -> `Download ZIP`;
- Extrair o conteúdo do arquivo compactado e mover para o lugar que achar mais conveniente;
- Voltando à página de extensões do Google Chrome, clicar em `Carregar descompactado` e selecionar a pasta onde o conteúdo da extensão está salvo;

## Utilização
Após realizada a instalação, basta selecionar qualquer texto na em alguma página web, clicar com o botão direito do mouse sobre a seleção e utilizar o menu `Copiar dígitos`. Caso haja qualquer caractere numérico na seleção, será copiado para a Área de Transferência. Do contrário, a Área de Transferência ficará vazia.

## Referências
- [Documentação da API to Google Chrome](https://developer.chrome.com/extensions);
- Vídeo ["How to Create a Chrome Extension"](https://www.youtube.com/watch?v=Olz4wo-ILwI) no YouTube;
- Resposta do usuário [harman](https://stackoverflow.com/users/4053800/harman) à pergunta [Copy output of a JavaScript variable to the clipboard](https://stackoverflow.com/a/33946647) no [Stack Overflow](https://stackoverflow.com) ajudou na lógica da função de envio à Área de Transferência.