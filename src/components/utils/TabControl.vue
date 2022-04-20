<template>
	<div class="tab-control">
		<!--具体的选项卡及其内容通过prop在父子组件之间传递-->
		<div
			v-for="(items, index) in titles"
			:key="index"
			@click="itemClick(index)"
			class="tab-control-item"
			:class="{ active: index == current }"
		>
			{{ items }}
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	name: 'TabControl',
	props: {
		titles: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	setup(props, { emit }) {
		let current = ref(0);
		const itemClick = (index) => {
			current.value = index;
			emit('tabClick', index); //向父组件传参,调用父组件事件
		};

		return {
			current,
			itemClick,
		};
	},
};
</script>

<style scoped>
.tab-control {
	height: 40px;
	line-height: 40px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: sticky;
	background-color: rgb(244, 236, 228);
	top: 45px;
}                                                                                                                                                                                                                                                                                                                                         

.tab-control-item {
	flex: 1;
	text-align: center;
	border-right: 1px solid rgb(114, 101, 101, 0.3);
}

.tab-control-item.active {
	border-bottom: 1px solid brown;
}
</style>