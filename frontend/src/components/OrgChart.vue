<script setup>
import { OrgChart } from 'd3-org-chart';
import { select } from 'd3-selection';
import { onMounted, watchEffect } from 'vue';

import { useRouter } from 'vue-router';

const props = defineProps(["search", "data"])

const data = props.data

let chart;

const filterChart = (value) => {
  if (!chart) return
  // Get input value
  // const value = e.srcElement.value;

  // Clear previous higlighting
  chart.clearHighlighting();

  // Get chart nodes
  const data = chart.data();

  // Mark all previously expanded nodes for collapse
  data.forEach((d) => (d._expanded = false));

  // Loop over data and check if input value matches any name
  data.forEach((d) => {
    if (value != '' && d.name.toLowerCase().includes(value.toLowerCase())) {
      // If matches, mark node as highlighted
      d._highlighted = true;
      d._expanded = true;
    }
  });

  // Update data and rerender graph
  chart.data(data).render().fit();
}

watchEffect(() => {
  filterChart(props.search)
})

const router = useRouter()



const onClick = (event, d) => {
  if (!d.data.id) return
  router.push(`/divisions/${d.data.id}`)
}



onMounted(() => {
  chart = new OrgChart()
    .container(".chart-container")
    .data(data)
    .nodeWidth((d) => 250)
    .initialZoom(0.7)
    .nodeHeight((d) => 150)
    .childrenMargin((d) => 40)
    .compactMarginBetween((d) => 15)
    .compactMarginPair((d) => 80)
    .expandAll()
    .clearHighlighting()
    .nodeContent(function (d, i, arr, state) {
      select(this).on('click', onClick)

      return `
        <div style="height:${d.height}px;border-radius:2px;overflow:visible"})">
          <div style="height:${d.height}px;padding-top:0px;background-color:WhiteSmoke;border:1px solid gray;">
            <div style="height:${d.height}px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <div style="color:#111672;font-size:16px;font-weight:bold; text-align: center; padding: 10px;">${d.data.name}</div>
            </div> 
          </div>     
        </div>
      `
    })
    .render();
})
</script>

<template>
  <div id="svg-tree" class="chart-container"></div>
</template>
