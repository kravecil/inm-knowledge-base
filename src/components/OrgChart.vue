<script setup>
import data from '@/assets/organization_schema_d3.json';

import { OrgChart } from 'd3-org-chart';
import { select } from 'd3-selection'
import { onMounted } from 'vue';

import { useRouter } from 'vue-router';

const router = useRouter()

const onClick = (event, d) => {
  console.log('Node clicked!')

  const route = d.data.route
  if (route) router.push(route)
}

onMounted(() => {
  new OrgChart()
    .container(".chart-container")
    .data(data)
    .nodeWidth((d) => 250)
    .initialZoom(0.7)
    .nodeHeight((d) => 150)
    .childrenMargin((d) => 40)
    .compactMarginBetween((d) => 15)
    .compactMarginPair((d) => 80)
    .expandAll()
    .nodeContent(function (d, i, arr, state) {
      select(this).on('click', onClick)

      return `
        <div style="height:${d.height}px;border-radius:2px;overflow:visible"})">
          <div style="height:${d.height}px;padding-top:0px;background-color:white;border:1px solid lightgray;">
            <div style="height:${d.height}px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <div style="color:#111672;font-size:16px;font-weight:bold; text-align: center;">${d.data.name}</div>
              <div style="color:#404040;font-size:16px;margin-top:4px">Иванов Иван Иванович</div>
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
