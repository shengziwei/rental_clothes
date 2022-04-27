<template>
	<div class="goods-list">
		<div class="goods-item" v-for="item in goodsData" :key="item.id">
			<a href="" @click.prevent="goDetail(item.id)">
				<!--取消原来的事件，使用自定义事件-->
				<goods :item="item"></goods>
			</a>
		</div>
	</div>
</template>

<script>
import goods from '@/components/home/goods.vue';
import { useRouter } from 'vue-router';
import { ref, onMounted, reactive, watchEffect, nextTick } from 'vue';
import BScroll from 'better-scroll';

export default {
	name: 'GoodsList',
	components: {
		goods,
	},
	props: {
		goodsData: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	setup() {
		const router = useRouter();

		const goDetail = (id) => {
			router.push({
				name: 'Detail',
				query: {
					id,
				},
			});
		};

		return {
			goDetail,
		};
	},
};
</script>

<style>
.goods-list {
	display: flex;
	padding-bottom: 100px;
	flex-wrap: wrap;
	font-family: "VisbyCF-Bold";
	font-weight: bold;
	width: 100%;
}

.goods-item {
    width: 36%;
	background-color: white;
	margin: 20px 6% 10px;
	align-items: center;
	border-radius: 10px;
}
</style>