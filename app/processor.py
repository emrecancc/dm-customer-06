import re


def parse_line(line):
    m = re.match(r'(\w+)=(\d+)', line)
    if m:
        return m.group(1), int(m.group(2))
    return None


def main():
    with open('data.txt') as f:
        for line in f:
            result = parse_line(line.strip())
            if result:
                print(result)


if __name__ == "__main__":
    main()
