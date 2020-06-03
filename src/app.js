const hasNfcReadSupport = 'NDEFReader' in window;
const hasNfcWriteSupport = 'NDEFWriter' in window;

(async () => {

  if (hasNfcReadSupport) {
    /* Scan NFC tags */

    console.log('Has NFC READ support!');

    const reader = new NDEFReader();

    async function startScanning() {
      await reader.scan();
      reader.onreading = event => {
        /* handle NDEF messages */

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

    const nfcPermissionStatus = await navigator.permissions.query({ name: "nfc" });
    if (permissionStatus.state === "granted") {
      // NFC access was previously granted, so we can start NFC scanning now.
      startScanning();
    } else {
      // Show a "scan" button.
      document.querySelector("#scanButton").style.display = "block";
      document.querySelector("#scanButton").onclick = event => {
        // Prompt user to allow UA to send and receive info when they tap NFC devices.
        startScanning();
      };
    }
  }

  if (hasNfcWriteSupport) {
    /* Write NFC tags */

    console.log('Has NFC WRITE support!');
  }

})();
