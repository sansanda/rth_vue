<script setup>
defineProps({
  title: String,
});
const model = defineModel();
</script>

<template>
  <div class="mb-6 p-4 border rounded-lg">
    <h3 class="font-semibold mb-3">{{ title }}</h3>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <label>Enabled</label>
        <input type="checkbox" v-model="model.enabled" />
      </div>

      <div>
        <label>Range</label>
        <select v-model="model.range" class="input">
          <option>AUTO</option>
          <option>100Ω</option>
          <option>1kΩ</option>
          <option>10kΩ</option>
        </select>
      </div>

      <div>
        <label>Channel Number</label>
        <select v-model="model.number" class="input">
          <option>101</option>
          <option>102</option>
          <option>102</option>
          <option>104</option>
          <option>105</option>
          <option>106</option>
          <option>107</option>
          <option>108</option>
          <option>109</option>
          <option>110</option>
        </select>
      </div>
    </div>
  </div>
</template>
