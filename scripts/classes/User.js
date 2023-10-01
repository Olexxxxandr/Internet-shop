export class User {
    static userId = 0;
    constructor(userName, email, phone) {
        this.id = User.userId++;
        this.userName = userName;
        this.email = email;
        this.phone = phone;
    }

    getData() {
        return {
            userId: User.userId,
            userName: this.userName,
            email: this.email,
            phone: this.phone
        }
    }

    getAnswer() {
         return `Дякуємо, ${this.userName}. Новинки і знижки будуть надходити до вас у вигляді SMS.`;
    }
}