export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Главная страница</h1>
        <p className="text-xl text-gray-600 mb-8">
          Добро пожаловать на мой сайт! Это главная страница.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">Обо мне</h3>
            <p>Я изучаю React и создаю свой первый сайт.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">Проекты</h3>
            <p>Здесь будут мои работы.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">Контакты</h3>
            <p>Свяжитесь со мной.</p>
          </div>
        </div>
      </div>
    </div>
  );
}