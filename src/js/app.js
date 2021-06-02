import '../scss/style.scss';


let appLists =  [
	{
		isSorted: true,
		isOpen: true,
		items: [
			{
				color: '#f1c40f',
				quantity: 12,
				selected: false
			},
			{
				color: '#2ecc71',
				quantity: 8,
				selected: false
			},
			{
				color: '#3498db',
				quantity: 32,
				selected: false
			},
			{
				color: '#9b59b6',
				quantity: 1,
				selected: false
			}
		],
		selectedItems: []
	},
	{
		isSorted: true,
		isOpen: false,
		items: [
			{
				color: '#f1c40f',
				quantity: 12,
				selected: false
			},
			{
				color: '#2ecc71',
				quantity: 8,
				selected: false
			},
			{
				color: '#3498db',
				quantity: 32,
				selected: false
			},
			{
				color: '#9b59b6',
				quantity: 0,
				selected: false
			}
		],
		selectedItems: []
	},
	{
		isSorted: true,
		isOpen: false,
		items: [
			{
				color: '#e74c3c',
				quantity: 40,
				selected: false
			},
			{
				color: '#e67e22',
				quantity: 7,
				selected: false
			},
			{
				color: '#bdc3c7',
				quantity: 12,
				selected: false
			},
			{
				color: '#34495e',
				quantity: 0,
				selected: false
			}
		],
		selectedItems: []
	},
	{
		isSorted: true,
		isOpen: false,
		items: [
			{
				color: '#3498db',
				quantity: 1,
				selected: false
			},
			{
				color: '#1abc9c',
				quantity: 8,
				selected: false
			},
			{
				color: '#fd79a8',
				quantity: 60,
				selected: false
			},
			{
				color: '#6c5ce7',
				quantity: 24,
				selected: false
			}
		],
		selectedItems: []
	},
];





const vm = new Vue({
	el: '#app',
	data: {
		lists: appLists
	},
	methods: {
		validateNumber(item) {
			if (!item.quantity || item.quantity < 0) {
				item.quantity = 0;
			}
		},
		changeAllItems(list) {
			if (list.items.length !== list.selectedItems.length) {
				list.items.forEach(item => {
					item.selected = true;
				});
				this.editList(list);
			} else {
				list.items.forEach(item => {
					item.selected = false;
				});
				this.editList(list);
			}
		},
		editList(list) {
			list.selectedItems = list.items.filter(item => item.selected === true);
		},
		reduceColor(list, color) {
			const reducedColor = list.selectedItems.find(item => item.color === color);
			reducedColor.quantity--;
		}
	},
	computed: {
		filteredList() {	
			return this.lists.map(list => {
				return list.selectedItems.map(item => {
					return {color: item.color, quantity: item.quantity};
				})
			})
		},
		unfilteredList() {
			return this.lists.map(list => {
				let totalColors = [];
				list.selectedItems.forEach(item => {
					for (let i = 1; i <= item.quantity; i++) {
						totalColors.push(item.color);
					}
				});
				return totalColors.sort( () => Math.random() - 0.5 );
			});
		}
	}
});







