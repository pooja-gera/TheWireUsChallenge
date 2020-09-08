# SCSS Declaring Variables and commenting

Variables:

You assign a value to a name that begins with $, and then you can refer to that name instead of the value itself.

Example:

$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);

.alert {
  border: 1px solid $border-dark;
}

Comments:

Single-line comments start with //, and go until the end of the line.

Multi-line comments start with /* and end at the next */. If a multi-line comment is written somewhere that a statement is allowed, it’s compiled to a CSS comment. They’re also called loud comment
