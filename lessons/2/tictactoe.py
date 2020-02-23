from .grid import Grid


class TicTacToe:
    def __init__(self):
        self.grid = Grid()

    def play(self):
        print('play!')


if __name__ == '__main__':
    TicTacToe().play()
