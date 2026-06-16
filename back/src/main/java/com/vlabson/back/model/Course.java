package com.vlabson.back.model;

import jakarta.persistence.*;
import lombok.Data;

//@Getter poderia ser utilizado para indicar ao JPA que ele devera criar os get e set
//@Setter
//o @Data faz a mesma coisa dos dois comandos de cima em uma unica linha
//o @entity endica que essa entidade tambem é a estrutura do banco
//pode ser utilizado @Table(name =  "cursos") para apronfundar no detalhe da entidade

@Data
@Entity
public class Course {

    //o @id indica que esse dado é uma chave primaria
    //indica tambem que ele tera o valor gerado automatico no banco
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 200, nullable = false)
    private String name;

    @Column(length = 20, nullable = false)
    private String category;


}
