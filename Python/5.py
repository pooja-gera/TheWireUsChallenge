# Python program to convert an integer to a roman numeral


class num_to_rom:
    def int_to_Rom(self, num):
        val = [
            1000, 900, 500, 400,
            100, 90, 50, 40,
            10, 9, 5, 4,
            1
        ]
        rom = [
            "M", "CM", "D", "CD",
            "C", "XC", "L", "XL",
            "X", "IX", "V", "IV",
            "I"
        ]
        roman_num = ''
        i = 0
        while num > 0:
            for _ in range(num//val[i]):
                roman_num += rom[i]
                num -= val[i]
            i += 1
        return roman_num


print(num_to_rom().int_to_Rom(1))
print(num_to_rom().int_to_Rom(4000))
