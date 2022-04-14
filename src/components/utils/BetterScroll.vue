<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

  <script>
import BScroll from 'better-scroll';
import { ref, onMounted, reactive, watchEffect, nextTick } from 'vue';

export default {
	name: 'BetterScroll',

	setup(props, { emit }) {
		let bscroll = reactive({});
		const scroll = ref(null);
		const wrapper = ref(null);
		let page = 1;

		const getData = () => {
			emit('loadMore');
			console.log('触发事件');
		};

		onMounted(() => {
			bscroll = scroll.value = new BScroll(wrapper.value, {
				probeType: 3,
				click: true,
				pullUpLoad: true, //滚动加载更多
			});

			//触发滚动事件
			bscroll.on('scroll', (position) => {
				//滚动后刷新页面，重新计算新的区域的高度
				//需要使用refresh方法
			});

			bscroll.on('pullingUp', () => {
				getData();
			});
			bscroll.finishPullUp();

			bscroll.refresh();
		});
		//监听变量变化
		watchEffect(() => {
			//延迟执行数据更新，dom渲染完成后进行数据更新
			nextTick(() => {
				bscroll && bscroll.refresh();
			});
		});
		return {
			wrapper,
			scroll,
			getData,
		};
	},
};
</script>

<style>
</style>

  