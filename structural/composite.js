class Document {
  constructor(title) {
    this.title = title;
    this.signature = null;
  }
  sign(signature) {
    this.signature = signature;
  }
}

class DocumentComposite {
  constructor(title) {
    this.items = [];
    if (title) {
      this.items.push(new Document(title));
    }
  }
  add(item) {
    this.items.push(item);
  }
  sign(signature) {
    this.items.forEach((doc) => {
      doc.sign(signature);
    });
  }
}

const forms = new DocumentComposite();

const artModule = new Document('Contrato do módulo de arte');

const filesModule = new Document('Contrato do módulo de arquivos');

forms.add(artModule);
forms.add(filesModule);

forms.sign('Taldo Junior');

console.log(forms);
