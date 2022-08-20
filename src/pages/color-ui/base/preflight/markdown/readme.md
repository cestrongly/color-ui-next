<!--
 * @Author: cest
 * @Date: 2022-08-21 00:17:39
 * @LastEditTime: 2022-08-21 00:47:19
 * @LastEditors: cest
 * @FilePath: /color-ui-next/src/pages/color-ui/base/preflight/markdown/readme.md
 * @Description: 基础样式 Preflight
-->
# Preflight

 一套武断的针对 color-ui 项目预设的基础样式

------

## 概览

基于 [modern-normalize](https://github.com/sindresorhus/modern-normalize) , Preflight 是一套针对 color-ui 项目的基础样式，旨在消除跨浏览器的不一致性，并使您的工作更轻松地符合设计系统的约束。

尽管 Preflight 中的大多数样式都是不会被注意到的 — 它们只是简单地让事情表现得更像您期望的样子 — 有些样式是很故意为之的，当您初次遇到它们时可能会感到惊讶。

------

## 默认的外边距已移除

Preflight 会从标题，块引用，段落等元素中删除所有默认外边距。

```css
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}
```

这样做是为了这种情况事更难发生：不小心地依赖了用户代理（user-agent）样式表的边距值，而这些边距值并不属于您间距比例的一部分。

------

## 标题无样式

默认情况下，所有标题元素都是完全未设置样式的，并且其字体大小（font-size）和字体粗细（font-weight）与普通文本没有区别。

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
```

这个原因是双重的：

- 它可以帮助您避免不小心地偏离了您的字形比例（type scale）。
  默认情况下，浏览器会为在 color-ui 默认字形比例（type scale）中不存在的标题分配大小，并且不能保证这个大小会存在于您自己的字形比例（type scale）中。
- 在用户界面（ UI ） 开发中，不应该经常在视觉上强调标题。
  默认情况下，将标题设置为无样式意味着您对标题使用的任何样式都会是有意识和谨慎地进行的。

------

## 列表无样式

默认情况下，有序列表和无序列表是无样式的，没有符号标记或数字，而且没有外边距或内边距。

```css
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

如果您想为列表设置样式，则可以使用 `list-style-type` 和 `list-style-position` 功能类：

```html
<ul class="list-disc list-inside">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

**可访问性注意事项**

VoiceOver 不会将无样式列表宣布为列表。 如果您的内容确实是一个列表，但您想保持它没有样式，请为元素添加一个“列表”角色：
> Unstyled lists are not announced as lists by VoiceOver. If your content is truly a list but you would like to keep it unstyled, add a “list” role to the element:

```html
<ul role="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

------

## 图片是块级元素

默认情况下，图片和其他可替换元素 (比如 `svg`, `video`, `canvas` 等) 是 `display: block` 。

```css
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}
```

这有助于避免浏览器默认设置中经常遇到的意外对齐问题 `display: inline` 。

如果您需要让其中的一个元素使用 `inline` 而不是 `block`，只需使用 `inline` 功能类：

```html
<img class="inline" src="..." alt="...">
```

------

## 边框样式已被全局地重置
为了能简单地通过添加 `border` 类就能添加边框，color-ui 使用了以下规则覆盖了所有元素的默认边框样式：

```css
*,
::before,
::after {
  border-width: 0;
  border-style: solid;
  border-color: theme('borderColor.default', currentColor);
}
```

由于 `border` 类仅设置了 `border-width` 属性，因此这个重置可确保使用上述类后都会始终添加一条实心的 1px 边框，边框的颜色是您配置的默认边框颜色。

集成某些第三方库时，这可能会导致某些意外结果, 比如 [Google maps]()。

当您遇到这种情况时，可以通过使用自己的自定义 CSS 覆盖 Preflight 样式来解决它们：

```css
.google-map * {
  border-style: none;
}
```

------

按钮默认有轮廓
为保证我们可以提供开箱即用的样式，我们确保了按钮都具有默认的轮廓。您可以通过使用 `focus:ring` 或类似的功能类应用到您的按钮中来覆盖它。

```css
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
```
