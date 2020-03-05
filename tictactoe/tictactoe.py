from tictactoe.player import Player
from tictactoe.symbol import Symbol
from tictactoe.grid import Grid


class TicTacToe:
    def __init__(self):
        self.player = Player()
        self.symbol = Symbol()
        self.grid = Grid()
