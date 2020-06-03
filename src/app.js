const hasNfcReadSupport = 'NDEFReader' in window;
const hasNfcWriteSupport = 'NDEFWriter' in window;

if (hasNfcReadSupport) {
  /* Scan NFC tags */

  console.log('Has NFC READ support!');

  const reader = new NDEFReader();
  reader.scan().then(() => {
    console.log("Scan started successfully.");
    reader.onerror = () => {
      console.log("Cannot read data from the NFC tag. Try another one?");
    };
    reader.onreading = event => {
      console.log("NDEF message read.");
    };
  }).catch(error => {
    console.log(`Error! Scan failed to start: ${error}.`);
  });

  reader.onreading = event => {
    const message = event.message;
    for (const record of message.records) {
      console.log("Record type:  " + record.recordType);
      console.log("MIME type:    " + record.mediaType);
      console.log("Record id:    " + record.id);
      switch (record.recordType) {
        case "text":
          // TODO: Read text record with record data, lang, and encoding.
          break;
        case "url":
          // TODO: Read URL record with record data.
          break;
        default:
        // TODO: Handle other records with record data.
      }
    }
  };
}

if (hasNfcWriteSupport) {
  /* Write NFC tags */

  console.log('Has NFC WRITE support!');
}
