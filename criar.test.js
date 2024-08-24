const { novoUsuario } = require('./js/firebase/authentication.js'); // Ajuste o caminho para o arquivo onde a função está definida

// Mock do Firebase
const mockCreateUserWithEmailAndPassword = jest.fn();
const mockAuth = {
  createUserWithEmailAndPassword: mockCreateUserWithEmailAndPassword
};

// Mock do window.location
const mockLocation = { href: '' };
global.window = { location: mockLocation };

// Mock do console.log
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation();
const mockConsoleError = jest.spyOn(console, 'error').mockImplementation();

// Mock da função alerta
const mockAlerta = jest.fn();
global.alerta = mockAlerta;

// Mock do Firebase
global.firebase = {
  auth: jest.fn(() => mockAuth)
};

describe('novoUsuario', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('deve criar um novo usuário e redirecionar para home.html', async () => {
    const email = 'test@example.com';
    const senha = 'password123';
    const user = { uid: 'testUID', displayName: 'Test User', email: email, photoURL: 'http://example.com/photo.jpg' };

    mockCreateUserWithEmailAndPassword.mockResolvedValue({ user: user });

    await novoUsuario(email, senha);

    expect(mockCreateUserWithEmailAndPassword).toHaveBeenCalledWith(email, senha);
    expect(console.log).toHaveBeenCalledWith(`Usuário Logado: ${JSON.stringify(user)}`);
    expect(window.location.href).toBe(`http://localhost/`);
  });
});
