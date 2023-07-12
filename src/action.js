import Swal from "sweetalert2";
import React from "react";

export function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        Swal.fire({
            title: 'Custom width, padding, color, background.',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
    rgba(0,0,123,0.4)
    url("https://media.tenor.com/0jI-YXeywSsAAAAM/nyan-cat-cat.gif")
    top
    no-repeat
  `
        });
    }
    return (
        <a href="https://learn.codegym.vn/courses/reactjs" onClick={handleClick}>
            Click_Me
        </a>
    );
}