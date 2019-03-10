<template>
  <div id="signature" class="signature">
    <div class="signature-body">
      <canvas></canvas>
    </div>
    <!-- <div class="signature-pad--footer">
      <div class="signature-pad--actions">
        <div>
          <button type="button" class="button clear" data-action="clear">Clear</button>
          <button type="button" class="button" data-action="undo">Undo</button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import * as SignaturePad from 'signature_pad/dist/signature_pad';

export default {
  mounted () {
    let wrapper = document.getElementById("signature");
    let canvas = wrapper.querySelector("canvas");
    new SignaturePad(canvas, {
      backgroundColor: 'rgb(255, 255, 255)'
    });
  }
}
</script>

<style scoped>
.signature {
  margin-bottom: 22px;
}
.signature-body {
    border-radius: 4px;
    border: 1px solid #DCDFE6;
}
</style>