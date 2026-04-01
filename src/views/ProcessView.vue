<script setup>
import { reactive } from 'vue'
import ProcessControl from '@/components/ProcessControl/ProcessControl.vue'
import ProcessFooter from '@/components/ProcessControl/ProcessFooter.vue'
import ProcessConsole from '@/components/ProcessControl/ProcessConsole.vue'

const process = reactive({
  state: 'idle',
  progress: 0,
  step: 0,
  stepDescription: 'Some description of the actual step',
  logs: []
})

/***********************************/
/*SIMPLE STATE MACHINE*/
/***********************************/
const transitions = {
  idle: ['running'],
  running: ['paused', 'stopped'],
  paused: ['running', 'stopped'],
  stopped: ['running']
}

const canTransition = (from, to) => {
  return transitions[from]?.includes(to)
}

const setState = (newState) => {
  if (!canTransition(process.state, newState)) {
    console.warn(`Transición inválida: ${process.state} → ${newState}`)
    return
  }
  process.state = newState
}

/***********************************/
/*COMMANDS*/
/***********************************/
const sendCommand = async (action) => {
  addLog(`Comando enviado al back-end. Action: ${action}`)
  try {
    await fetch(`/api/process/${action}`, {
      method: 'POST'
    })
  } catch (e) {
    addLog('Error enviando comando', 'error')
  }
  // simulación temporal
  if (action === 'play') setState('running')
  if (action === 'pause') setState('paused')
  if (action === 'stop') setState('stopped')
}

/***********************************/
/*ACTIONS*/
/***********************************/
const startProcess = () => {
  sendCommand('play')
}

const pauseProcess = () => {
  sendCommand('pause')
}

const stopProcess = () => {
  sendCommand('stop')
}


/***********************************/
/*LOGS*/
/***********************************/

const MAX_LOGS = 500

const addLog = (message, level = 'info') => {
  if (process.logs.length > MAX_LOGS) {
    process.logs.shift()
  }

  process.logs.push({
    time: new Date().toLocaleTimeString(),
    message,
    level
  })
}

const updateFromBackend = (data) => {
  process.state = data.state
  process.progress = data.progress
  process.step = data.step
  process.stepDescription = data.stepDescription
}

</script>

<template>
  <div class="h-screen box-border flex flex-col max-w-4xl mx-auto px-6 py-4">

    <!-- TOP -->
    <ProcessControl
      :state="process.state"
      @play="startProcess"
      @pause="pauseProcess"
      @stop="stopProcess"
    />

    <!-- MIDDLE (crece) -->
    <div class="flex-1 min-h-0 overflow-hidden">
      <ProcessConsole :logs="process.logs" />
    </div>

    <!-- BOTTOM -->
    <ProcessFooter
      :state="process.state"
      :progress="process.progress"
      :step="process.step"
      :stepDescription="process.stepDescription"
    />

  </div>
</template>