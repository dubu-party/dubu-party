@ManyToOne, @OneToMany

@ManyToOne 에 pk 값을 두고,
@OneToMany 에 fk 값을 둔다.

pk 값을 주는 방법은?
- @Id @GeneratedValue(strategy = GenerationType.IDENTITY)

fk 값을 주는 방법은?
- @JoinColumn(name = "fk")

fetch = FetchType.LAZY 를 주는 것이 좋다.
- @ManyToOne(fetch = FetchType.LAZY)

두 엔티티에서 서로를 참조하고 있을 때, 무한 루프가 발생할 수 있다.
- @JsonIgnore 를 사용하면 무한 루프를 방지할 수 있다. 
- 보통 어디에서 사용하냐면, @OneToMany 에서 사용한다.




 

