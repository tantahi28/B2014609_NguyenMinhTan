<template>
    <div>
        <section class="block relative z-1 bg-blueGray-600">
            <div class="container mx-auto">
                <div class="justify-center flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4 mt-6 pb-16">
                        <div class="row flex flex-wrap">
                            <BookCard v-for="book in books" :key="book._id" :book="book" />
                            <div v-if="books.length === 0">Không tìm thấy quyển sách nào!!!</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer-component />
    </div>
</template>

<script>
import BookService from "@/services/book.service";
import CartService from "@/services/cart.service";
import AuthService from "@/services/auth.service";
import { useAuthStore } from "../stores/auth.store";
import BookCard from "@/components/BookCard.vue";
import { useRoute } from 'vue-router';

export default {
    components: {
        BookCard,
    },
    data() {
        return {
            books: [],
            authStore: useAuthStore(),
            bookService: new BookService(),
            authService: new AuthService(),
            cartService: new CartService(),
            searchText: "",
        };
    },
    methods: {
        async getBooks(q) {
            this.books = (await this.bookService.getAll({ q, perPage: 999 }))?.data?.docs || [];
        },
        async addBookToCart(bookId) {
            await this.cartService.addBookToCart(bookId);
        },
    },
    created() {
        this.getBooks();
    },
    mounted() {
        // Lắng nghe sự thay đổi của route.query
        const route = useRoute();
        this.searchText = route.query.q || ""; // Cập nhật searchText ban đầu từ query URL
        this.getBooks(this.searchText); // Gọi hàm getBooks ban đầu với searchText
        this.$watch(() => route.query, () => {
            // Thực hiện rerender khi query URL thay đổi
            this.searchText = route.query.q || ""; // Cập nhật searchText từ query URL mới
            this.getBooks(this.searchText); // Gọi hàm getBooks với searchText mới
        });
    },
};
</script>
